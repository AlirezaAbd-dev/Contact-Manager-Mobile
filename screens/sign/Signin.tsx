import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterCard from '../../components/UI/RegisterCard';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';

const Signin = () => {
   const navigation = useNavigation<Screens>();

   function onSigninHandler() {
      navigation.navigate('Home');
   }
   return (
      <RegisterCard
         title='ثبت نام'
         confirmHandler={onSigninHandler}
      />
   );
};

export default Signin;

const styles = StyleSheet.create({});
