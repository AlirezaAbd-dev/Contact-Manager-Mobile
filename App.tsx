import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import { QueryClient, QueryClientProvider } from 'react-query';
import { TokenContextProvider } from './context/tokenContext';
import Navigation from './components/navigation/Navigation';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function App() {
   return (
      <TokenContextProvider>
         <QueryClientProvider client={queryClient}>
            <StatusBar style='light' />
            <Navigation />
         </QueryClientProvider>
      </TokenContextProvider>
   );
}
