import {
   Image,
   ScrollView,
   StyleSheet,
   View,
   KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import CustomTextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';
import { COLORS } from '../constants/Colors';

const AddContactScreen = () => {
   const [image, setImage] = useState('');

   const navigation = useNavigation();

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [16, 11],
         quality: 0.5,
      });

      console.log(result);

      if (!result.canceled)
         if (result.assets[0]) setImage(result.assets[0].uri);
   };

   return (
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior='position'
         contentContainerStyle={{ flex: 1 }}>
         <ScrollView style={styles.container}>
            {image ? (
               <Image
                  source={{ uri: image }}
                  style={styles.pickedImage}
               />
            ) : (
               <Image
                  style={styles.headerImage}
                  source={require('../assets/images/man-taking-note.png')}
               />
            )}
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
                     withIcon={false}
                     onPress={pickImage}>
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
   headerImage: {
      width: '80%',
      height: 'auto',
      aspectRatio: 16 / 9,
      alignSelf: 'center',
   },
   pickedImage: {
      width: 200,
      height: 'auto',
      aspectRatio: 1 / 1,
      borderRadius: 100,
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
