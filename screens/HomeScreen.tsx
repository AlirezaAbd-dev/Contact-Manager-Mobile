import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import MainContactCard from '../components/cards/MainContactCard';
import Button from '../components/UI/Button';

const DUMMYDATA = [
   {
      fullname: 'علیرضا',
      image: require('../assets/icon.png'),
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: require('../assets/icon.png'),
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: require('../assets/icon.png'),
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: require('../assets/icon.png'),
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
   {
      fullname: 'علیرضا',
      image: require('../assets/icon.png'),
      phone: '09115584629',
      email: 'alireza.abedi9310@gmail.com',
      _id: 'sakdjvbsdkjh.kajfcnxzckjn',
   },
];
const HomeScreen = () => {
   return (
      <ScrollView style={styles.container}>
         <Button
            withIcon={true}
            iconAlign='Left'
            icon='add-circle'
            iconColor='black'
            iconSize={20}
            style={styles.addNewContactButton}>
            ساخت مخاطب جدید
         </Button>
         {DUMMYDATA.map((item, index) => (
            <MainContactCard
               key={index}
               {...item}
            />
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
      paddingTop: 0,
   },
   bottomFixer: {
      padding: 20,
   },
   addNewContactButton: {
      alignSelf: 'flex-end',
      marginVertical: 10,
      borderRadius: 20,
   },
});
