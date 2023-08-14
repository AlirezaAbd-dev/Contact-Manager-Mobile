import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import MainContactCard from '../components/cards/MainContactCard';

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
            <MainContactCard />
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
   bottomFixer: {
      padding: 20,
   },
});
