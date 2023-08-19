import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { COLORS } from '../../constants/Colors';
import IconButton from '../UI/IconButton';
import { Screens } from '../../routes';
import Divider from '../UI/Divider';
import CardDetails from '../layouts/CardDetails';
import { Contact } from '../../APIs/contactAPIs';
import Button from '../UI/Button';

const MainContactCard = (props: Contact) => {
   const navigation = useNavigation<Screens>();

   const [pickedId, setPickedId] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);

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

         <Modal
            isVisible={isModalOpen}
            style={{
               width: '90%',
               justifyContent: 'center',
               alignItems: 'center',
            }}
            coverScreen={true}
            onBackdropPress={() => setIsModalOpen(false)}
         >
            <View style={styles.modalContainer}>
               <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>حذف مخاطب</Text>
                  <IconButton
                     icon='close'
                     size={24}
                     color={COLORS.error}
                     containerStyle={{ borderRadius: 100 }}
                     style={{ paddingVertical: 10 }}
                     onPress={() => setIsModalOpen(false)}
                  />
               </View>
               <View>
                  <Text style={styles.modalContentText}>
                     آیا مطمئن هستید که میخواهید مخاطب مورد نظر را حذف کنید؟
                  </Text>
               </View>
               <View style={styles.modalButtonsContainer}>
                  <Button
                     withIcon={false}
                     style={{ backgroundColor: COLORS.primary }}
                     rippleColor={COLORS.ripplePrimary}
                     onPress={() => setIsModalOpen(false)}
                  >
                     لفو
                  </Button>
                  <Button
                     withIcon={false}
                     style={{ backgroundColor: COLORS.error }}
                     rippleColor={COLORS.rippleError}
                  >
                     حذف شود
                  </Button>
               </View>
            </View>
         </Modal>
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
   modalContainer: {
      padding: 10,
      backgroundColor: COLORS.background,
      width: '100%',
      borderRadius: 30,
   },
   modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   modalHeaderText: {
      fontFamily: 'Vazir',
      fontSize: 18,
      color: COLORS.error,
      marginLeft: 30,
   },
   modalContentText: {
      fontFamily: 'Vazir',
      fontSize: 14,
      color: 'white',
      padding: 10,
   },
   modalButtonsContainer: {
      flexDirection: 'row-reverse',
      gap: 8,
      margin: 10,
   },
});
