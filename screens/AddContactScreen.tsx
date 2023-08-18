import {
   ScrollView,
   StyleSheet,
   View,
   KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '../components/UI/Button';
import { COLORS } from '../constants/Colors';
import usePickImage from '../hooks/usePickImage';
import { EditContactSchemaType } from '../components/editContact/Form';
import { editContactValidation } from '../validation/editContactValidation';
import Avatar from '../components/addContact/Avatar';
import Form from '../components/addContact/Form';

const AddContactScreen = () => {
   const navigation = useNavigation();

   const { image, pickImage } = usePickImage();

   const { control, handleSubmit } = useForm<EditContactSchemaType>({
      resolver: zodResolver(editContactValidation),
   });

   function onSubmitHandler(data: EditContactSchemaType) {
      console.log(data);
   }

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior='position'
         contentContainerStyle={{ flex: 1 }}
      >
         <ScrollView style={styles.container}>
            <Avatar image={image} />

            {/* //? AVATAR SECTION */}
            <View style={styles.inputContainer}>
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
         </ScrollView>
      </KeyboardAvoidingView>
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
