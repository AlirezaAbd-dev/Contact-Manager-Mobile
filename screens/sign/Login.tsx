import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';

const Login = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const navigation = useNavigation<Screens>();

   async function onLoginHandler(formData: FormSchemaType) {
      try {
         setError('');
         setIsLoading(true);
         const response = await axios.post(
            'https://contact-manager-ecru.vercel.app/api/login',
            {
               ...formData,
            },
            { timeout: 20000 },
         );
         await AsyncStorage.setItem(
            'token',
            response.headers['x-authentication-token'],
         );
         setIsLoading(false);
         navigation.navigate('Home');
      } catch (err: any) {
         setIsLoading(false);
         if (err.response) {
            return setError(err?.response?.data?.message);
         }
         setError(err.message);
      }
   }

   return (
      <RegisterCard
         isLoading={isLoading}
         title='ورود'
         serverError={error}
         confirmHandler={onLoginHandler}
      />
   );
};

export default Login;
