import { StyleSheet, Image, Text } from 'react-native';
import { ScrollView } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenParams, Screens } from '../routes';
import Card from '../components/layouts/Card';
import CardDetails from '../components/layouts/CardDetails';
import Divider from '../components/UI/Divider';
import Button from '../components/UI/Button';

export const ContactDetails = () => {
   const navigation = useNavigation<Screens>();
   const route = useRoute<ScreenParams>();
   const id = route.params?.id;

   if (!id) {
      navigation.goBack();
   }

   return (
      <ScrollView style={styles.container}>
         <Card>
            <Image
               style={styles.image}
               source={require('../assets/icon.png')}
            />
            <CardDetails>
               <Text style={styles.cardDetailsText}>
                  نام و نام خانوادگی: علیرضا عابدی
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>
                  شماره موبایل: 09115584629
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>
                  ایمیل: alireza.abedi9310@gmail.com
               </Text>
               <Divider />
               <Text style={styles.cardDetailsText}>شغل: برنامه نویس</Text>
            </CardDetails>
            <Button
               style={styles.backButton}
               withIcon={false}
               onPress={navigation.goBack}>
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
      width: 200,
      height: 'auto',
      aspectRatio: 1 / 1,
      borderRadius: 100,
      alignSelf: 'center',
      marginBottom: 20,
   },
   cardDetailsText: {
      fontFamily: 'Vazir',
      paddingVertical: 5,
   },
   backButton: {
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 20,
   },
});
