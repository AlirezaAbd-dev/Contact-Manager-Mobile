import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import MainHeaderTitle from './components/UI/MainHeaderTitle';
import { COLORS } from './constants/Colors';
import HomeScreen from './screens/HomeScreen';
import LogoutButton from './components/UI/LogoutButton';
import AddContactScreen from './screens/AddContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ContactDetails from './screens/ContactDetails';
import { QueryClient, QueryClientProvider } from 'react-query';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

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
         onLayout={onLayoutRootView}
      >
         <QueryClientProvider client={queryClient}>
            <StatusBar style='light' />
            <NavigationContainer>
               <Stack.Navigator
                  screenOptions={{
                     headerStyle: { backgroundColor: COLORS.navbar },
                     headerTintColor: COLORS.primary,
                     headerTitleAlign: 'center',
                     contentStyle: { backgroundColor: COLORS.background },
                  }}
               >
                  <Stack.Screen
                     name='SignScreen'
                     component={LoginScreen}
                     options={{
                        headerTitle: () => {
                           return <MainHeaderTitle />;
                        },
                        headerBackVisible: false,
                     }}
                  />

                  <Stack.Screen
                     name='Home'
                     component={HomeScreen}
                     options={({ navigation }) => ({
                        headerTitle: () => {
                           return <MainHeaderTitle />;
                        },
                        headerBackVisible: false,
                        headerLeft: () => {
                           return <LogoutButton />;
                        },
                        headerRight: ({ tintColor }) => {
                           return (
                              <MaterialIcons
                                 suppressHighlighting={true}
                                 name='add'
                                 color={tintColor}
                                 size={24}
                                 onPress={() => {
                                    navigation.navigate('AddContact');
                                 }}
                              />
                           );
                        },
                     })}
                  />

                  <Stack.Screen
                     name='AddContact'
                     component={AddContactScreen}
                     options={{
                        title: 'ساخت مخاطب جدید',
                        headerBackVisible: false,
                        animation: 'slide_from_bottom',
                     }}
                  />

                  <Stack.Screen
                     name='Details'
                     component={ContactDetails}
                     options={{
                        headerTitle: () => {
                           return <MainHeaderTitle />;
                        },
                        headerBackVisible: false,
                        animation: 'slide_from_left',
                     }}
                  />

                  <Stack.Screen
                     name='EditContact'
                     component={EditContactScreen}
                     options={{
                        title: 'ویرایش مخاطب',
                        headerTintColor: COLORS.yellowAccent,
                        headerBackVisible: false,
                        animation: 'slide_from_right',
                     }}
                  />
               </Stack.Navigator>
            </NavigationContainer>
         </QueryClientProvider>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
