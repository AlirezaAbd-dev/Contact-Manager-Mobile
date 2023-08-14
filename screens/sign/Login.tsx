import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';
import Button from '../../components/UI/Button';
import RegisterCard from '../../components/UI/RegisterCard';

const Login = () => {
   function onLoginHandler() {}

   return (
      <RegisterCard
         title='ورود'
         confirmHandler={onLoginHandler}
      />
   );
};

export default Login;

const styles = StyleSheet.create({});
