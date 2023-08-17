import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';

const Login = () => {
   async function onLoginHandler(formData: FormSchemaType) {
      console.log('login...');
      try {
         const response = await axios.post(
            'https://contact-manager-ecru.vercel.app/api/login',
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
         title='ورود'
         confirmHandler={onLoginHandler}
      />
   );
};

export default Login;
