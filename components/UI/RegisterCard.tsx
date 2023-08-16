import {
   KeyboardAvoidingView,
   Pressable,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import Button from './Button';
import CustomTextInput from './TextInput';

type RegisterCardType = {
   title: 'ورود' | 'ثبت نام';
   confirmHandler: () => void;
};

const RegisterCard = (props: RegisterCardType) => {
   return (
      <KeyboardAvoidingView style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
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
         </View>
      </KeyboardAvoidingView>
   );
};

export default RegisterCard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: COLORS.background,
   },
   title: {
      color: 'white',
      fontFamily: 'Vazir',
      fontSize: 24,
      marginBottom: 10,
   },
   card: {
      marginTop: 50,
      alignItems: 'center',
      width: '90%',
      backgroundColor: COLORS.card,
      borderRadius: 8,
      padding: 20,
      elevation: 8,
   },
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
