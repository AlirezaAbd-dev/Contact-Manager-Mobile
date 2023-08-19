import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/Colors';
import IconButton from '../UI/IconButton';
import { Screens } from '../../routes';
import Divider from '../UI/Divider';
import CardDetails from '../layouts/CardDetails';
import { Contact } from '../../APIs/contactAPIs';
import DeleteModal from '../modal/DeleteModal';

const MainContactCard = (props: Contact) => {
   const navigation = useNavigation<Screens>();

   const [isModalOpen, setIsModalOpen] = useState(false);

   function closeModal() {
      setIsModalOpen(false);
   }

   return (
      <View style={styles.card}>
         <Image
            source={
               props.image
                  ? { uri: props.image }
                  : require('../../assets/images/placeholder.jpg')
            }
            style={styles.cardImage}
         />
         <CardDetails>
            <Text style={styles.cardDetailsText}>
               نام و نام خانوادگی: {props.fullname}
            </Text>
            <Divider />
            <Text style={styles.cardDetailsText}>
               شماره موبایل: {props.phone}
            </Text>
            <Divider />
            <Text style={styles.cardDetailsText}>ایمیل: {props.email}</Text>
         </CardDetails>
         <View style={styles.cardActionButtons}>
            <IconButton
               icon='remove-red-eye'
               color={COLORS.blueAccent}
               size={20}
               onPress={() => navigation.navigate('Details', { id: props._id })}
            />
            <IconButton
               icon='edit'
               color={COLORS.yellowAccent}
               size={20}
               onPress={() =>
                  navigation.navigate('EditContact', { id: props._id })
               }
            />
            <IconButton
               icon='delete'
               color={COLORS.error}
               size={20}
               onPress={() => {
                  setIsModalOpen(true);
               }}
            />
         </View>

         <DeleteModal
            id={props._id}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
         />
      </View>
   );
};

export default MainContactCard;

const styles = StyleSheet.create({
   card: {
      backgroundColor: COLORS.card,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 30,
      overflow: 'hidden',
      elevation: 4,
   },
   cardImage: {
      width: '100%',
      height: 220,
      borderRadius: 30,
   },

   cardDetailsText: {
      fontFamily: 'Vazir',
      paddingVertical: 5,
   },
   cardActionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
   },
});
