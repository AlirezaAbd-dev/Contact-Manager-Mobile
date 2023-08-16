import {
   Image,
   ScrollView,
   StyleSheet,
   View,
   KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';
import { COLORS } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const AddContactScreen = () => {
   const navigation = useNavigation();

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior='position'
         contentContainerStyle={{ flex: 1 }}>
         <ScrollView style={styles.container}>
            <Image
               style={styles.image}
               source={require('../assets/images/man-taking-note.png')}
            />
            <View style={styles.inputContainer}>
               <CustomTextInput placeholder='نام و نام خانوادگی' />
               <CustomTextInput
                  placeholder='شماره موبایل'
                  keyboardType='number-pad'
               />
               <CustomTextInput
                  placeholder='آدرس ایمیل'
                  keyboardType='email-address'
               />
               <View style={styles.lastInputSection}>
                  <Button
                     style={[styles.button]}
                     withIcon={false}>
                     بارگذاری عکس
                  </Button>
                  <CustomTextInput
                     style={styles.jobInput}
                     placeholder='شغل'
                  />
               </View>
               <View style={styles.buttonsContainer}>
                  <Button
                     rippleColor={COLORS.ripplePrimary}
                     style={[styles.button, styles.confirmButton]}
                     withIcon={false}>
                     ساخت مخاطب
                  </Button>
                  <Button
                     rippleColor={COLORS.rippleError}
                     style={[styles.button, styles.cancelButton]}
                     withIcon={false}
                     onPress={navigation.goBack}>
                     انصراف
                  </Button>
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default AddContactScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 20,
   },
   inputContainer: {
      paddingTop: 40,
   },
   lastInputSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 8,
      alignItems: 'center',
      paddingRight: 1,
   },
   image: {
      width: '80%',
      height: 'auto',
      aspectRatio: 16 / 9,
      alignSelf: 'center',
   },
   buttonsContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 8,
   },
   jobInput: {
      width: '50%',
   },
   button: {
      borderRadius: 20,
   },
   confirmButton: {
      backgroundColor: COLORS.primary,
   },
   cancelButton: {
      backgroundColor: COLORS.error,
   },
});
