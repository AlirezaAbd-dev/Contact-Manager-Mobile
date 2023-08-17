import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLayoutEffect, useState } from 'react';

const useToken = () => {
   const [token, setToken] = useState<string | null>();

   useLayoutEffect(() => {
      (async () => {
         const token = await AsyncStorage.getItem('token');
         if (token) setToken(token);
      })();
   }, []);

   return token;
};

export default useToken;
