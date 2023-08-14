import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import { COLORS } from '../constants/Colors';
import IconButton from '../components/UI/IconButton';

const DUMMYDATA = [
   {
      fullname: 'علیرضا',
      image: '',
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: '',
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: '',
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: '',
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: '',
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
];
const HomeScreen = () => {
   return (
      <ScrollView style={styles.container}>
         {DUMMYDATA.map((item) => (
            <View style={styles.card}>
               <Image
                  source={require('../assets/icon.png')}
                  style={styles.cardImage}
               />
               <View style={styles.cardDetails}>
                  <Text style={styles.cardDetailsText}>
                     نام و نام خانوادگی: علیرضا عابدی
                  </Text>
                  <View style={styles.cardDetailsDevider}></View>
                  <Text style={styles.cardDetailsText}>
                     شماره موبایل: 09115584629
                  </Text>
                  <View style={styles.cardDetailsDevider}></View>
                  <Text style={styles.cardDetailsText}>
                     ایمیل: alireza.abedi9310@gmail.com
                  </Text>
               </View>
               <View style={styles.cardActionButtons}>
                  <IconButton
                     icon='remove-red-eye'
                     color={COLORS.blueAccent}
                     size={20}
                  />
                  <IconButton
                     icon='edit'
                     color={COLORS.yellowAccent}
                     size={20}
                  />
                  <IconButton
                     icon='delete'
                     color={COLORS.error}
                     size={20}
                  />
               </View>
            </View>
         ))}
         <View style={styles.bottomFixer}></View>
      </ScrollView>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   card: {
      backgroundColor: COLORS.card,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 30,
      overflow: 'hidden',
   },
   cardImage: {
      width: '100%',
      height: 220,
      borderRadius: 30,
   },
   cardDetails: {
      margin: 10,
      padding: 15,
      backgroundColor: COLORS.accent,
      borderRadius: 25,
   },
   cardDetailsText: {
      fontFamily: 'Vazir',
      paddingVertical: 5,
   },
   cardDetailsDevider: {
      borderTopWidth: 0.5,
      borderColor: COLORS.background,
   },
   cardActionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
   },
   bottomFixer: {
      padding: 20,
   },
});
