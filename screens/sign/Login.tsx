import { StyleSheet } from 'react-native';
import React from 'react';
import RegisterCard from '../../components/UI/RegisterCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../../routes';

const Login = () => {
   const navigation = useNavigation<Screens>();

   function onLoginHandler() {
      navigation.navigate('Home');
   }

   return (
      <RegisterCard
         title='ورود'
         confirmHandler={onLoginHandler}
      />
   );
};

export default Login;

const styles = StyleSheet.create({});
