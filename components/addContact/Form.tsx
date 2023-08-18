import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import CustomTextInput from '../UI/TextInput';
import { EditContactSchemaType } from '../editContact/Form';
import Button from '../UI/Button';

type FormProps = {
   control: Control<EditContactSchemaType, any>;
   pickImage: () => Promise<void>;
};

const Form = (props: FormProps) => {
   return (
      <>
         <Controller
            name='fullname'
            control={props.control}
            render={({ field, fieldState }) => (
               <CustomTextInput placeholder='نام و نام خانوادگی' />
            )}
         />
         <Controller
            name='phone'
            control={props.control}
            render={({ field, fieldState }) => (
               <CustomTextInput
                  placeholder='شماره موبایل'
                  keyboardType='number-pad'
               />
            )}
         />
         <Controller
            name='email'
            control={props.control}
            render={({ field, fieldState }) => (
               <CustomTextInput
                  placeholder='آدرس ایمیل'
                  keyboardType='email-address'
               />
            )}
         />
         <View style={styles.lastInputSection}>
            <Button
               style={[styles.button]}
               withIcon={false}
               onPress={props.pickImage}
            >
               انتخاب عکس
            </Button>
            <Controller
               name='job'
               control={props.control}
               render={({ field, fieldState }) => (
                  <CustomTextInput
                     style={styles.jobInput}
                     placeholder='شغل'
                  />
               )}
            />
         </View>
      </>
   );
};

export default Form;

const styles = StyleSheet.create({
   lastInputSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 8,
      alignItems: 'center',
      paddingRight: 1,
   },
   button: {
      borderRadius: 20,
   },
   jobInput: {
      width: '50%',
   },
});
