import { StyleSheet, View } from 'react-native';
import React, { useCallback, useContext, useLayoutEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { hideAsync } from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from '../../routes';
import { COLORS } from '../../constants/Colors';
import EditContactScreen from '../../screens/EditContactScreen';
import MainHeaderTitle from '../UI/MainHeaderTitle';
import ContactDetails from '../../screens/ContactDetails';
import AddContactScreen from '../../screens/AddContactScreen';
import LogoutButton from '../UI/LogoutButton';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { TokenContext } from '../../context/tokenContext';

const Stack = createNativeStackNavigator<Routes>();

const Navigation = () => {
   const [fontsLoaded] = useFonts({
      Vazir: require('../../assets/fonts/Vazir.ttf'),
   });

   const { token, setToken } = useContext(TokenContext);

   useLayoutEffect(() => {
      (async () => {
         const tokenFromStorage = await AsyncStorage.getItem('token');
         setToken(tokenFromStorage);
      })();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await hideAsync();
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
         <NavigationContainer>
            <Stack.Navigator
               initialRouteName={token ? 'Home' : 'SignScreen'}
               screenOptions={{
                  headerStyle: { backgroundColor: COLORS.navbar },
                  headerTintColor: COLORS.primary,
                  headerTitleAlign: 'center',
                  contentStyle: { backgroundColor: COLORS.background },
               }}
            >
               {!token && (
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
               )}

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
      </View>
   );
};

export default Navigation;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});
