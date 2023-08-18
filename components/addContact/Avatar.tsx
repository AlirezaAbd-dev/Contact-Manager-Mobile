import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { ImagePickerAsset } from 'expo-image-picker';

type AvatarProps = {
   image: ImagePickerAsset | null | undefined;
};

const Avatar = (props: AvatarProps) => {
   if (props.image) {
      return (
         <Image
            source={{ uri: props.image.uri }}
            style={styles.pickedImage}
         />
      );
   } else {
      return (
         <Image
            style={styles.headerImage}
            source={require('../../assets/images/man-taking-note.png')}
         />
      );
   }
};

export default Avatar;

const styles = StyleSheet.create({
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
});
