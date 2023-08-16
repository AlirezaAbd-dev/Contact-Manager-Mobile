import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const usePickImage = () => {
   const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>();

   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [16, 11],
         quality: 0.5,
      });

      console.log(result);

      if (!result.canceled) if (result.assets[0]) setImage(result.assets[0]);
   };

   return { image, pickImage };
};

export default usePickImage;
