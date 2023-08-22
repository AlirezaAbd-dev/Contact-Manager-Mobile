import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { ImagePickerAsset } from 'expo-image-picker';
import { uploadAsync, FileSystemUploadType } from 'expo-file-system';

import Button from '../UI/Button';
import { API_URL } from '../../env';
import useToken from '../../hooks/useToken';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';
import Error from '../UI/Error';
import { COLORS } from '../../constants/Colors';

type AvatarProps = {
   image: ImagePickerAsset | null | undefined;
   fetchedImage: string | undefined;
   id: string;
};

const Avatar = (props: AvatarProps) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const token = useToken();
   const navigation = useNavigation<Screens>();

   async function onImageUploadHandler() {
      if (props.image) {
         const arr = props.image?.uri.split('/');
         if (arr) {
            try {
               setIsLoading(true);
               await uploadAsync(
                  `${API_URL}/imageUpload/${props.id}`,
                  props.image.uri,
                  {
                     headers: { 'x-authentication-token': token as string },
                     uploadType: FileSystemUploadType.MULTIPART,
                     fieldName: 'image',
                  },
               );
               setIsLoading(false);

               navigation.replace('Home');
            } catch (err: any) {
               setIsLoading(false);
               if (err.response) {
                  setError(err.response.data.message);
               } else {
                  setError(
                     'خطایی در ارتباط با سرور پیش آمد، دوباره تلاش کنید!',
                  );
               }
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

            {error && <Error errorMessage={error} />}
            {props.image && (
               <Button
                  style={styles.buttons}
                  withIcon={false}
                  onPress={onImageUploadHandler}
                  isLoading={isLoading}
                  spinnerColor={COLORS.primary}
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
