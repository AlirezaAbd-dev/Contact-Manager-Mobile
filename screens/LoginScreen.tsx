import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './sign/Login';
import Signin from './sign/Signin';
import { COLORS } from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const LoginScreen = () => {
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
