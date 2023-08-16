import {
   ScrollView,
   StyleSheet,
   Image,
   View,
   KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenParams, Screens } from '../routes';
import { COLORS } from '../constants/Colors';
import CustomTextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';
import usePickImage from '../hooks/usePickImage';

const EditContactScreen = () => {
   const navigation = useNavigation<Screens>();
   const route = useRoute<ScreenParams>();
   const id = route.params?.id;

   if (!id) {
      navigation.goBack();
   }

   const { image, pickImage } = usePickImage();

   return (
      <ScrollView style={styles.container}>
         <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='position'
            contentContainerStyle={{ flex: 1 }}>
            <View style={styles.card}>
               <View style={styles.imageContainer}>
                  <Image
                     style={styles.image}
                     source={
                        image
                           ? { uri: image.uri }
                           : require('../assets/icon.png')
                     }
                  />
                  {image && (
                     <Button
                        style={styles.buttons}
                        withIcon={false}>
                        بارگذاری عکس
                     </Button>
                  )}
               </View>

               <View style={styles.inputsContainer}>
                  <CustomTextInput placeholder='نام و نام خانوادگی' />
                  <CustomTextInput placeholder='شماره موبایل' />
                  <CustomTextInput placeholder='آدرس ایمیل' />
                  <View style={styles.lastInputsSection}>
                     <Button
                        style={styles.buttons}
                        withIcon={false}
                        onPress={pickImage}>
                        انتخاب عکس
                     </Button>
                     <CustomTextInput
                        style={styles.jobInput}
                        placeholder='شغل'
                     />
                  </View>
               </View>
               <View style={styles.buttonsContainer}>
                  <Button
                     rippleColor={COLORS.ripplePrimary}
                     style={[styles.buttons, styles.confirmButton]}
                     withIcon={false}>
                     ویرایش مخاطب
                  </Button>
                  <Button
                     rippleColor={COLORS.rippleError}
                     style={[styles.buttons, styles.cancelButton]}
                     withIcon={false}
                     onPress={navigation.goBack}>
                     انصراف
                  </Button>
               </View>
            </View>
         </KeyboardAvoidingView>
      </ScrollView>
   );
};

export default EditContactScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 20,
   },
   card: {
      backgroundColor: COLORS.card,
      width: '100%',
      padding: 20,
      borderRadius: 30,
   },
   imageContainer: {
      alignItems: 'center',
      gap: 10,
   },
   image: {
      width: 200,
      height: 'auto',
      aspectRatio: 1 / 1,
      borderRadius: 100,
      alignSelf: 'center',
   },
   inputsContainer: {
      marginTop: 20,
   },
   lastInputsSection: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 8,
   },
   jobInput: {
      width: '50%',
   },
   buttonsContainer: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'flex-end',
      marginTop: 20,
   },
   buttons: {
      borderRadius: 20,
   },
   confirmButton: {
      backgroundColor: COLORS.primary,
   },
   cancelButton: {
      backgroundColor: COLORS.error,
   },
});
