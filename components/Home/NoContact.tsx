import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import Button from '../UI/Button';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';

const NoContact = () => {
   const navigation = useNavigation<Screens>();

   return (
      <>
         <Image
            source={require('../../assets/images/404_test_1a.gif')}
            style={styles.image}
         />
         <Text style={styles.text}>
            شما در حال حاظر هیچ مخاطبی را ثبت نکرده اید.
         </Text>
         <Button
            withIcon={false}
            style={styles.button}
            onPress={() => navigation.navigate('AddContact')}
         >
            ساخت مخاطب جدید
         </Button>
      </>
   );
};

export default NoContact;

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 'auto',
      aspectRatio: 16 / 9,
   },
   text: {
      color: 'white',
      fontFamily: 'Vazir',
      alignSelf: 'center',
      marginTop: 10,
   },
   button: {
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 30,
   },
});
