import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { ImagePickerAsset } from 'expo-image-picker';
import Button from '../UI/Button';

type AvatarProps = {
   image: ImagePickerAsset | null | undefined;
   fetchedImage: string | undefined;
};

const Avatar = (props: AvatarProps) => {
   return (
      <>
         <View style={styles.imageContainer}>
            <Image
               style={styles.image}
               source={
                  props.image
                     ? { uri: props.image.uri }
                     : { uri: props.fetchedImage } ||
                       require('../../assets/images/placeholder.jpg')
               }
            />
            {props.image && (
               <Button
                  style={styles.buttons}
                  withIcon={false}
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
