import {
   StyleSheet,
   Image,
   Text,
   ActivityIndicator,
   View,
   Linking,
} from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsScreenParams, Screens } from '../routes';
import Card from '../components/layouts/Card';
import CardDetails from '../components/layouts/CardDetails';
import Divider from '../components/UI/Divider';
import Button from '../components/UI/Button';
import useToken from '../hooks/useToken';
import { useQuery } from 'react-query';
import { getContactById } from '../APIs/contactAPIs';
import { COLORS } from '../constants/Colors';
import Error from '../components/UI/Error';
import IconButton from '../components/UI/IconButton';

export const ContactDetails = () => {
   const token = useToken();
   const navigation = useNavigation<Screens>();
   const route = useRoute<DetailsScreenParams>();
   const id = route.params?.id;

   const { data, isLoading, isError, error } = useQuery(
      ['details', token, id],
      getContactById,
   );

   if (!id) {
      navigation.goBack();
   }

   if (isLoading) {
      return (
         <ActivityIndicator
            size={'large'}
            color={COLORS.primary}
            style={{ marginTop: 30 }}
         />
      );
   }

   if (!isLoading && isError) {
      return (
         <Error
            errorMessage={
               (error as any).response.data.message || (error as any).message
            }
         />
      );
   }

   return (
      <ScrollView style={styles.container}>
         <Card>
            <Image
               style={styles.image}
               source={
                  data?.image
                     ? { uri: data.image }
                     : require('../assets/images/placeholder.jpg')
               }
            />
            <CardDetails>
               <Text style={styles.cardDetailsText}>
                  نام و نام خانوادگی: {data?.fullname}
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>
                  شماره موبایل: {data?.phone}
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>
                  ایمیل: {data?.email || 'ندارد'}
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>
                  شغل: {data?.job || 'ندارد'}
               </Text>
            </CardDetails>
            <View style={styles.buttonContainer}>
               <IconButton
                  icon='phone'
                  size={26}
                  color='#57C5B6'
                  onPress={() => {
                     const url = `tel:${data?.phone}`;
                     Linking.canOpenURL(url).then(() => {
                        Linking.openURL(url);
                     });
                  }}
               />
               <IconButton
                  icon='message'
                  size={26}
                  color='#279EFF'
                  onPress={() => {
                     const url = `sms:${data?.phone}`;
                     Linking.canOpenURL(url).then(() => {
                        Linking.openURL(url);
                     });
                  }}
               />
               {data?.email && (
                  <IconButton
                     icon='mail'
                     size={26}
                     color='#FD8D14'
                     onPress={() => {
                        const url = `mailto:${data?.email}`;
                        Linking.canOpenURL(url).then(() => {
                           Linking.openURL(url);
                        });
                     }}
                  />
               )}
            </View>
            <Button
               style={styles.backButton}
               withIcon={false}
               onPress={navigation.goBack}
            >
               بازگشت به صفحه اصلی
            </Button>
         </Card>
      </ScrollView>
   );
};

export default ContactDetails;

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   image: {
      width: '100%',
      height: 'auto',
      aspectRatio: 16 / 10,
      alignSelf: 'center',
      borderRadius: 20,
      marginBottom: 20,
   },
   cardDetailsText: {
      fontFamily: 'Vazir',
      paddingVertical: 5,
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
   backButton: {
      borderRadius: 20,
      alignSelf: 'center',
      marginVertical: 10,
   },
});
