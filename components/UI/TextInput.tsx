import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';

const CustomTextInput = (props: TextInputProps) => {
   return (
      <TextInput
         {...props}
         style={[styles.textInput, props.style]}
         placeholderTextColor={'gray'}
         keyboardAppearance='dark'
      />
   );
};

export default CustomTextInput;

const styles = StyleSheet.create({
   textInput: {
      borderWidth: 0.3,
      borderColor: 'white',
      borderRadius: 4,
      marginVertical: 10,
      padding: 5,
      direction: 'rtl',
      color: 'white',
      fontFamily: 'Vazir',
      fontSize: 16,
      width: '100%',
      textAlign: 'right',
   },
});
