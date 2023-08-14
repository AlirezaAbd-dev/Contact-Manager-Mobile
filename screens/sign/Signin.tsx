import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterCard from '../../components/UI/RegisterCard';

const Signin = () => {
   function onSigninHandler() {}
   return (
      <RegisterCard
         title='ثبت نام'
         confirmHandler={onSigninHandler}
      />
   );
};

export default Signin;

const styles = StyleSheet.create({});
