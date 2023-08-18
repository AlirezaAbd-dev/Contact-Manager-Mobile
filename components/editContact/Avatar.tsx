import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { ImagePickerAsset } from 'expo-image-picker';
import { uploadAsync, FileSystemUploadType } from 'expo-file-system';

import Button from '../UI/Button';
import { API_URL } from '../../env';
import useToken from '../../hooks/useToken';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';

type AvatarProps = {
   image: ImagePickerAsset | null | undefined;
   fetchedImage: string | undefined;
   id: string;
};

const Avatar = (props: AvatarProps) => {
   const token = useToken();
   const navigation = useNavigation<Screens>();

   async function onImageUploadHandler() {
      if (props.image) {
         const arr = props.image?.uri.split('/');
         if (arr) {
            console.log('uploading');

            try {
               const response = await uploadAsync(
                  `${API_URL}/imageUpload/${props.id}`,
                  props.image.uri,
                  {
                     headers: { 'x-authentication-token': token as string },
                     uploadType: FileSystemUploadType.MULTIPART,
                     fieldName: 'image',
                  },
               );

               navigation.replace('Home');
            } catch (err) {
               console.error(err);
            }
         }
      }
   }

   return (
      <>
         <View style={styles.imageContainer}>
            <Image
               style={styles.image}
               source={
                  props.image
                     ? { uri: props.image.uri }
                     : props.fetchedImage
                     ? { uri: props.fetchedImage }
                     : require('../../assets/images/placeholder.jpg')
               }
            />
            {props.image && (
               <Button
                  style={styles.buttons}
                  withIcon={false}
                  onPress={onImageUploadHandler}
               >
                  بارگذاری عکس
               </Button>
            )}
         </View>
      </>
   );
};

export default Avatar;

const styles = StyleSheet.create({
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
   buttons: {
      borderRadius: 20,
   },
});
