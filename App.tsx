import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import {
   setJSExceptionHandler,
   setNativeExceptionHandler,
} from 'react-native-exception-handler';

import { QueryClient, QueryClientProvider } from 'react-query';
import { TokenContextProvider } from './context/tokenContext';
import Navigation from './components/navigation/Navigation';
import { Alert } from 'react-native';

SplashScreen.preventAutoHideAsync();

setJSExceptionHandler((err, isFatal) => {
   console.info(`IsFatal: ${isFatal};`);
   console.error(err);
   Alert.alert('error', err.message);
}, true);

if (process.env.NODE_ENV === 'production') {
   setNativeExceptionHandler((ex) => {
      Alert.alert('Something went wrong!', ex);
   }, true);
}

const queryClient = new QueryClient();

export default function App() {
   return (
      <TokenContextProvider>
         <AutocompleteDropdownContextProvider>
            <QueryClientProvider client={queryClient}>
               <StatusBar style='light' />
               <Navigation />
            </QueryClientProvider>
         </AutocompleteDropdownContextProvider>
      </TokenContextProvider>
   );
}
