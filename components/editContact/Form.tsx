import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CustomTextInput from '../UI/TextInput';
import Button from '../UI/Button';
import { FullContact, editContactById } from '../../APIs/contactAPIs';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';
import { z } from 'zod';
import { editContactValidation } from '../../validation/editContactValidation';
import { useMutation } from 'react-query';
import useToken from '../../hooks/useToken';
import Error from '../UI/Error';

type FormProps = (FullContact | undefined) & {
   pickImage: () => Promise<void>;
};

export type EditContactSchemaType = z.infer<typeof editContactValidation>;

const ErrorText = (props: { text: string }) => {
   return (
      <Text style={{ fontFamily: 'Vazir', color: COLORS.error }}>
         {props.text}
      </Text>
   );
};

const Form = (props: FormProps) => {
   const token = useToken();
   const navigation = useNavigation<Screens>();
   const { control, handleSubmit } = useForm<EditContactSchemaType>({
      resolver: zodResolver(editContactValidation),
      values: {
         fullname: props.fullname,
         phone: props.phone,
         email: props.email,
         job: props.job,
      },
   });
   const mutation = useMutation({
      mutationFn: editContactById,
      mutationKey: `editContact:${props._id}`,
      onSuccess: () => {
         navigation.replace('Home');
      },
   });

   function onSubmitHandler(data: EditContactSchemaType) {
      mutation.mutate({ ...data, id: props._id, token: token as string });
   }

   return (
      <>
         <View style={styles.inputsContainer}>
            <Controller
               control={control}
               name='fullname'
               render={({ field, fieldState }) => (
                  <>
                     <CustomTextInput
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder='نام و نام خانوادگی'
                     />
                     {fieldState.error?.message && (
                        <ErrorText text={fieldState.error.message} />
                     )}
                  </>
               )}
            />
            <Controller
               control={control}
               name='phone'
               render={({ field, fieldState }) => (
                  <>
                     <CustomTextInput
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        keyboardType='number-pad'
                        placeholder='شماره موبایل'
                     />
                     {fieldState.error?.message && (
                        <ErrorText text={fieldState.error.message} />
                     )}
                  </>
               )}
            />
            <Controller
               control={control}
               name='email'
               render={({ field, fieldState }) => (
                  <>
                     <CustomTextInput
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        placeholder='آدرس ایمیل'
                        keyboardType='email-address'
                     />
                     {fieldState.error?.message && (
                        <ErrorText text={fieldState.error.message} />
                     )}
                  </>
               )}
            />
            <View style={styles.lastInputsSection}>
               <Button
                  style={styles.buttons}
                  withIcon={false}
                  onPress={props.pickImage}
               >
                  انتخاب عکس
               </Button>
               <Controller
                  control={control}
                  name='job'
                  render={({ field, fieldState }) => (
                     <>
                        <CustomTextInput
                           onChangeText={field.onChange}
                           onBlur={field.onBlur}
                           value={field.value}
                           style={styles.jobInput}
                           placeholder='شغل'
                        />
                        {fieldState.error?.message && (
                           <ErrorText text={fieldState.error.message} />
                        )}
                     </>
                  )}
               />
            </View>
         </View>
         {!mutation.isLoading && mutation.isError && (
            <Error
               errorMessage={
                  ((mutation.error as any).data.message as string) ||
                  ((mutation.error as any).message as string)
               }
            />
         )}
         <View style={styles.buttonsContainer}>
            <Button
               rippleColor={COLORS.ripplePrimary}
               style={[styles.buttons, styles.confirmButton]}
               withIcon={false}
               onPress={handleSubmit(onSubmitHandler)}
               isLoading={mutation.isLoading}
               spinnerColor={COLORS.primary}
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
      </>
   );
};

export default Form;

const styles = StyleSheet.create({
   inputsContainer: {
      marginTop: 20,
   },
   lastInputsSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 8,
   },
   jobInput: {
      width: '50%',
   },
   buttons: {
      borderRadius: 20,
   },
   buttonsContainer: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 20,
   },
   confirmButton: {
      backgroundColor: COLORS.primary,
   },
   cancelButton: {
      backgroundColor: COLORS.error,
   },
});
