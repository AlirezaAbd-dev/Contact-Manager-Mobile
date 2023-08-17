import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Screens } from '../../routes';
import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';

const Signin = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const navigation = useNavigation<Screens>();

   async function onSigninHandler(formData: FormSchemaType) {
      try {
         setError('');
         setIsLoading(true);
         const response = await axios.post(
            'https://contact-manager-ecru.vercel.app/api/signIn',
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
         navigation.replace('Home');
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
         title='ثبت نام'
         isLoading={isLoading}
         serverError={error}
         confirmHandler={onSigninHandler}
      />
   );
};

export default Signin;
