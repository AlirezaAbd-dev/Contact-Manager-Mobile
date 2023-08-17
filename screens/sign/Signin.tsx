import React from 'react';
import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
   async function onSigninHandler(formData: FormSchemaType) {
      console.log('signin...');
      try {
         const response = await axios.post(
            'https://contact-manager-ecru.vercel.app/api/signIn',
            {
               ...formData,
            },
         );
         console.log(response);
         console.log(response.headers['x-authentication-token']);
         await AsyncStorage.setItem(
            'token',
            response.headers['x-authentication-token'],
         );
         console.log('Success...');
      } catch (err) {
         console.error(err);
      }
   }
   return (
      <RegisterCard
         title='ثبت نام'
         confirmHandler={onSigninHandler}
      />
   );
};

export default Signin;
