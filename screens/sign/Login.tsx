import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import Button from '../../components/UI/Button';

const Login = () => {
   return (
      <View style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.title}>ورود</Text>
            <TextInput
               keyboardType='email-address'
               placeholderTextColor='gray'
               focusable={true}
               style={[styles.textInput]}
               placeholder='ایمیل'
            />
            <TextInput
               secureTextEntry={true}
               placeholderTextColor='gray'
               style={[styles.textInput]}
               placeholder='رمز عبور'
            />
            <Pressable style={styles.forgetPasswordPressable}>
               <Text style={styles.forgetPasswordText}>
                  رمز عبور خود را فراموش کرده اید؟
               </Text>
            </Pressable>
            <Button>ورود</Button>
         </View>
      </View>
   );
};

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
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
      alignItems: 'center',
      width: '90%',
      backgroundColor: COLORS.card,
      borderRadius: 8,
      padding: 20,
      elevation: 8,
   },
   textInput: {
      borderWidth: 0.3,
      borderColor: 'white',
      borderRadius: 4,
      marginVertical: 10,
      padding: 5,
      direction: 'rtl',
      color: 'white',
      fontFamily: 'Vazir',
      fontSize: 16,
      width: '100%',
      textAlign: 'right',
   },
   forgetPasswordPressable: {
      alignSelf: 'flex-end',
      marginTop: 20,
   },
   forgetPasswordText: {
      color: COLORS.error,
   },
});
