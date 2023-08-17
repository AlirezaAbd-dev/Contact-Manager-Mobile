import React from 'react';
import RegisterCard, { FormSchemaType } from '../../components/UI/RegisterCard';

const Signin = () => {
   function onSigninHandler(formData: FormSchemaType) {
      console.log(formData);
   }
   return (
      <RegisterCard
         title='ثبت نام'
         confirmHandler={onSigninHandler}
      />
   );
};

export default Signin;
