import {
   ScrollView,
   StyleSheet,
   Image,
   View,
   KeyboardAvoidingView,
   ActivityIndicator,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EditContactScreenParams, Screens } from '../routes';
import { COLORS } from '../constants/Colors';
import CustomTextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';
import usePickImage from '../hooks/usePickImage';
import Card from '../components/layouts/Card';
import { useQuery } from 'react-query';
import { FullContact, getContactById } from '../APIs/contactAPIs';
import useToken from '../hooks/useToken';
import Error from '../components/UI/Error';
import Avatar from '../components/editContact/Avatar';
import Form from '../components/editContact/Form';

const EditContactScreen = () => {
   const token = useToken();
   const navigation = useNavigation<Screens>();
   const route = useRoute<EditContactScreenParams>();
   const id = route.params?.id;

   const { image, pickImage } = usePickImage();

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
         <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='position'
            contentContainerStyle={{ flex: 1 }}
         >
            <Card style={{ padding: 20 }}>
               {/* //? AVATAR SECTION */}
               <Avatar
                  image={image}
                  fetchedImage={data?.image}
               />

               {/* //? FORM SECTION */}
               <Form
                  {...(data as FullContact)}
                  pickImage={pickImage}
               />

               {/* //? BUTTONS SECTION */}
               <View style={styles.buttonsContainer}>
                  <Button
                     rippleColor={COLORS.ripplePrimary}
                     style={[styles.buttons, styles.confirmButton]}
                     withIcon={false}
                  >
                     ویرایش مخاطب
                  </Button>
                  <Button
                     rippleColor={COLORS.rippleError}
                     style={[styles.buttons, styles.cancelButton]}
                     withIcon={false}
                     onPress={navigation.goBack}
                  >
                     انصراف
                  </Button>
               </View>
            </Card>
         </KeyboardAvoidingView>
      </ScrollView>
   );
};

export default EditContactScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 20,
   },
   buttonsContainer: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 20,
   },
   buttons: {
      borderRadius: 20,
   },
   confirmButton: {
      backgroundColor: COLORS.primary,
   },
   cancelButton: {
      backgroundColor: COLORS.error,
   },
});
