import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import MainHeaderTitle from './components/UI/MainHeaderTitle';
import { COLORS } from './constants/Colors';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
   const [fontsLoaded] = useFonts({
      Vazir: require('./assets/fonts/Vazir.ttf'),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }

   return (
      <View
         style={styles.container}
         onLayout={onLayoutRootView}>
         <StatusBar style='light' />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: { backgroundColor: COLORS.navbar },
                  headerTintColor: COLORS.primary,
                  headerTitleAlign: 'center',
                  contentStyle: { backgroundColor: COLORS.background },
               }}>
               <Stack.Screen
                  name='home'
                  component={HomeScreen}
                  options={{
                     headerTitle: () => {
                        return <MainHeaderTitle />;
                     },
                  }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
