import {
   Pressable,
   StyleSheet,
   Text,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import Button from './Button';
import CustomTextInput from './TextInput';
import SignCard from '../layouts/SignCard';

type RegisterCardType = {
   title: 'ورود' | 'ثبت نام';
   confirmHandler: () => void;
};

const RegisterCard = (props: RegisterCardType) => {
   return (
      <SignCard title={props.title}>
         <CustomTextInput
            keyboardType='email-address'
            focusable={true}
            placeholder='ایمیل'
         />
         <CustomTextInput
            secureTextEntry={true}
            placeholder='رمز عبور'
         />
         <Pressable style={styles.forgetPasswordPressable}>
            <Text style={styles.forgetPasswordText}>
               رمز عبور خود را فراموش کرده اید؟
            </Text>
         </Pressable>
         <Button
            withIcon={false}
            onPress={props.confirmHandler}
            style={styles.button}>
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
