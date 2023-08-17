import React, { useLayoutEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './sign/Login';
import Signin from './sign/Signin';
import { COLORS } from '../constants/Colors';
import DeleteAccount from './sign/DeleteAccount';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Screens, SignScreenParams } from '../routes';

const Tab = createMaterialTopTabNavigator();

const LoginScreen = () => {
   const navigation = useNavigation<Screens>();
   const route = useRoute<SignScreenParams>();
   const token = route.params?.token;

   useLayoutEffect(() => {
      if (token) {
         navigation.replace('Home');
      }
   }, [token]);

   return (
      <Tab.Navigator
         initialRouteName='Login'
         layoutDirection='rtl'
         backBehavior='initialRoute'
         screenOptions={{
            tabBarIndicatorContainerStyle: {
               backgroundColor: COLORS.background,
            },
            tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: COLORS.primary,
            tabBarLabelStyle: { fontFamily: 'Vazir' },
         }}
      >
         <Tab.Screen
            name='DeleteAccount'
            component={DeleteAccount}
            options={{ title: 'حذف حساب' }}
         />
         <Tab.Screen
            name='Signin'
            component={Signin}
            options={{ title: 'ثبت نام' }}
         />
         <Tab.Screen
            name='Login'
            component={Login}
            options={{ title: 'ورود' }}
         />
      </Tab.Navigator>
   );
};

export default LoginScreen;
