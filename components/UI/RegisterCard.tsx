import { Linking, Pressable, StyleSheet, Text, Vibration } from 'react-native';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import { COLORS } from '../../constants/Colors';
import Button from './Button';
import CustomTextInput from './TextInput';
import SignCard from '../layouts/SignCard';
import { signValidation } from '../../validation/signValidation';
import { MAIN_URL } from '../../env';

type RegisterCardType = {
   title: 'ورود' | 'ثبت نام';
   isLoading: boolean;
   serverError: string;
   confirmHandler: (formData: FormSchemaType) => void;
};

export type FormSchemaType = z.infer<typeof signValidation>;

const RegisterCard = (props: RegisterCardType) => {
   const { control, handleSubmit } = useForm<FormSchemaType>({
      resolver: zodResolver(signValidation),
      defaultValues: {
         email: '',
         password: '',
      },
   });

   useEffect(() => {
      if (props.serverError) {
         Vibration.vibrate();
      }
   }, [props.serverError]);

   return (
      <SignCard title={props.title}>
         {props.serverError && (
            <Text
               style={{
                  color: COLORS.error,
                  alignSelf: 'center',
                  fontFamily: 'Vazir',
               }}
            >
               {props.serverError}
            </Text>
         )}
         <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
               <>
                  <CustomTextInput
                     autoComplete='email'
                     onChangeText={field.onChange}
                     onBlur={field.onBlur}
                     value={field.value}
                     keyboardType='email-address'
                     focusable={true}
                     placeholder='ایمیل'
                     style={{
                        borderColor: error ? COLORS.error : 'white',
                     }}
                  />
                  {error?.message && (
                     <Text style={{ color: COLORS.error }}>
                        {error?.message}
                     </Text>
                  )}
               </>
            )}
         />
         <Controller
            name='password'
            control={control}
            render={({ field, fieldState: { error } }) => (
               <>
                  <CustomTextInput
                     onChangeText={field.onChange}
                     onBlur={field.onBlur}
                     value={field.value}
                     secureTextEntry={true}
                     placeholder='رمز عبور'
                     style={{
                        borderColor: error ? COLORS.error : 'white',
                     }}
                  />
                  {error?.message && (
                     <Text style={{ color: COLORS.error }}>
                        {error?.message}
                     </Text>
                  )}
               </>
            )}
         />
         <Pressable
            onPress={() => Linking.openURL(`${MAIN_URL}/resetPassword`)}
            style={styles.forgetPasswordPressable}
         >
            <Text style={styles.forgetPasswordText}>
               رمز عبور خود را فراموش کرده اید؟
            </Text>
         </Pressable>
         <Button
            withIcon={false}
            style={styles.button}
            isLoading={props.isLoading}
            spinnerColor={COLORS.secondary}
            onPress={handleSubmit(props.confirmHandler)}
         >
            {props.title}
         </Button>
      </SignCard>
   );
};

export default RegisterCard;

const styles = StyleSheet.create({
   forgetPasswordPressable: {
      alignSelf: 'flex-end',
      marginTop: 20,
   },
   forgetPasswordText: {
      color: COLORS.error,
   },
   button: {
      marginTop: 15,
   },
});
