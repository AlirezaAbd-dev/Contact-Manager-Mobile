import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

import { COLORS } from '../../constants/Colors';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

type DeleteModalProps = {
   isModalOpen: boolean;
   closeModal: () => void;
   id: string;
};

const DeleteModal = (props: DeleteModalProps) => {
   return (
      <Modal
         isVisible={props.isModalOpen}
         style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
         }}
         coverScreen={true}
         onBackdropPress={props.closeModal}
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
                  onPress={props.closeModal}
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
                  onPress={props.closeModal}
               >
                  لفو
               </Button>
               <Button
                  withIcon={false}
                  style={{ backgroundColor: COLORS.error }}
                  rippleColor={COLORS.rippleError}
               >
                  حذف کن
               </Button>
            </View>
         </View>
      </Modal>
   );
};

export default DeleteModal;

const styles = StyleSheet.create({
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
