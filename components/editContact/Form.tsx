import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CustomTextInput from '../UI/TextInput';
import Button from '../UI/Button';
import { FullContact } from '../../APIs/contactAPIs';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';
import { z } from 'zod';

type FormProps = (FullContact | undefined) & {
   pickImage: () => Promise<void>;
};
const formSchema = z.object({
   fullname: z.string().min(3),
   phone: z.string().min(8).max(12),
   email: z.string().email().optional(),
   job: z.string().min(2).optional(),
});

export type EditContactSchemaType = z.infer<typeof formSchema>;

const ErrorText = (props: { text: string }) => {
   return (
      <Text style={{ fontFamily: 'Vazir', color: COLORS.error }}>
         {props.text}
      </Text>
   );
};

const Form = (props: FormProps) => {
   const navigation = useNavigation<Screens>();
   const { control, handleSubmit } = useForm<EditContactSchemaType>({
      resolver: zodResolver(formSchema),
   });

   function onSubmitHandler(data: EditContactSchemaType) {
      console.log(data);
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
                        defaultValue={props?.fullname}
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
                        defaultValue={props?.phone}
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
                        defaultValue={props?.email || ''}
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
                           defaultValue={props?.job}
                        />
                        {fieldState.error?.message && (
                           <ErrorText text={fieldState.error.message} />
                        )}
                     </>
                  )}
               />
            </View>
         </View>
         <View style={styles.buttonsContainer}>
            <Button
               rippleColor={COLORS.ripplePrimary}
               style={[styles.buttons, styles.confirmButton]}
               withIcon={false}
               onPress={handleSubmit(onSubmitHandler)}
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
