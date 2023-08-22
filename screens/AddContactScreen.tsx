import {
   ScrollView,
   StyleSheet,
   View,
   KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadAsync, FileSystemUploadType } from 'expo-file-system';

import Button from '../components/UI/Button';
import { COLORS } from '../constants/Colors';
import usePickImage from '../hooks/usePickImage';
import { EditContactSchemaType } from '../components/editContact/Form';
import { editContactValidation } from '../validation/editContactValidation';
import Avatar from '../components/addContact/Avatar';
import Form from '../components/addContact/Form';
import { API_URL } from '../env';
import useToken from '../hooks/useToken';
import axios from 'axios';
import { Screens } from '../routes';
import Error from '../components/UI/Error';

const AddContactScreen = () => {
   const token = useToken();
   const navigation = useNavigation<Screens>();

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const { image, pickImage } = usePickImage();

   const { control, handleSubmit } = useForm<EditContactSchemaType>({
      resolver: zodResolver(editContactValidation),
   });

   async function onSubmitHandler(data: EditContactSchemaType) {
      try {
         setIsLoading(true);
         const url = `${API_URL}/contact`;
         const HEADERS = {
            'x-authentication-token': token as string,
         };
         if (image) {
            await uploadAsync(url, image?.uri, {
               fieldName: 'image',
               headers: HEADERS,
               uploadType: FileSystemUploadType.MULTIPART,
               parameters: { ...data },
            });
         } else {
            await axios.post(url, data, {
               headers: HEADERS,
            });
         }

         navigation.replace('Home');
      } catch (err: any) {
         if (err.response) {
            setError(err.response.data.message);
         } else {
            setError('خطایی در ارتباط با سرور پیش آمد، دوباره تلاش کنید!');
         }
      } finally {
         setIsLoading(false);
      }
   }

   return (
      <ScrollView style={styles.container}>
         <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='position'
            contentContainerStyle={{ flex: 1 }}
         >
            <Avatar image={image} />

            {/* //? AVATAR SECTION */}
            <View style={styles.inputContainer}>
               {error && <Error errorMessage={error} />}

               {/* //? FORM SECTION */}
               <Form
                  control={control}
                  pickImage={pickImage}
               />

               <View style={styles.buttonsContainer}>
                  <Button
                     rippleColor={COLORS.ripplePrimary}
                     style={[styles.button, styles.confirmButton]}
                     withIcon={false}
                     onPress={handleSubmit(onSubmitHandler)}
                     isLoading={isLoading}
                     spinnerColor={COLORS.primary}
                  >
                     ساخت مخاطب
                  </Button>
                  <Button
                     rippleColor={COLORS.rippleError}
                     style={[styles.button, styles.cancelButton]}
                     withIcon={false}
                     onPress={navigation.goBack}
                  >
                     انصراف
                  </Button>
               </View>
            </View>
         </KeyboardAvoidingView>
      </ScrollView>
   );
};

export default AddContactScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 20,
   },
   inputContainer: {
      paddingTop: 40,
   },
   lastInputSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 8,
      alignItems: 'center',
      paddingRight: 1,
   },
   buttonsContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 8,
   },
   jobInput: {
      width: '50%',
   },
   button: {
      borderRadius: 20,
   },
   confirmButton: {
      backgroundColor: COLORS.primary,
   },
   cancelButton: {
      backgroundColor: COLORS.error,
   },
});
