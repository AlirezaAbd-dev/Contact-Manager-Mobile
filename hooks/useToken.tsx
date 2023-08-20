import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useLayoutEffect } from 'react';
import { TokenContext } from '../context/tokenContext';

const useToken = () => {
   const { token, setToken } = useContext(TokenContext);

   useLayoutEffect(() => {
      (async () => {
         const getTokenFromStorage = await AsyncStorage.getItem('token');
         if (!token) {
            if (getTokenFromStorage) setToken(token);
         }
      })();
   }, []);

   return token;
};

export default useToken;
