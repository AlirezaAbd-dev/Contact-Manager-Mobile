import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useLayoutEffect } from 'react';
import { TokenContext } from '../context/tokenContext';

const useToken = () => {
   const { token, setToken } = useContext(TokenContext);

   useLayoutEffect(() => {
      (async () => {
         const token = await AsyncStorage.getItem('token');
         if (token) setToken(token);
      })();
   }, []);

   return token;
};

export default useToken;
