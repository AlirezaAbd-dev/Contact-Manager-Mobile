import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomTextInput from '../UI/TextInput';
import Button from '../UI/Button';
import { FullContact } from '../../APIs/contactAPIs';

type FormProps = (FullContact | undefined) & {
   pickImage: () => Promise<void>;
};

const Form = (props: FormProps) => {
   return (
      <View style={styles.inputsContainer}>
         <CustomTextInput
            placeholder='نام و نام خانوادگی'
            defaultValue={props?.fullname}
         />
         <CustomTextInput
            placeholder='شماره موبایل'
            defaultValue={props?.phone}
         />
         <CustomTextInput
            placeholder='آدرس ایمیل'
            defaultValue={props?.email || ''}
         />
         <View style={styles.lastInputsSection}>
            <Button
               style={styles.buttons}
               withIcon={false}
               onPress={props.pickImage}
            >
               انتخاب عکس
            </Button>
            <CustomTextInput
               style={styles.jobInput}
               placeholder='شغل'
               defaultValue={props?.job}
            />
         </View>
      </View>
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
});
