import React from 'react';
import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';
import axios from 'axios';

const Login = () => {
   async function onLoginHandler(formData: FormSchemaType) {
      const response = await axios.post(
         'https://contact-manager-ecru.vercel.app/api/login',
         {
            ...formData,
         },
      );
      console.log(response);
   }

   return (
      <RegisterCard
         title='ورود'
         confirmHandler={onLoginHandler}
      />
   );
};

export default Login;
