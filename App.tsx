import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { COLORS } from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <StatusBar style='light' />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerStyle: { backgroundColor: COLORS.background },
                  headerTintColor: COLORS.primary,
                  headerTitleAlign: 'center',
               }}>
               <Stack.Screen
                  name='home'
                  component={HomeScreen}
                  options={{
                     headerTitle(props) {
                        return (
                           <View>
                              <Text>وب اپلیکیشن</Text>
                              <Text></Text>
                           </View>
                        );
                     },
                  }}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}

const styles = StyleSheet.create({});
