import {
   Pressable,
   StyleProp,
   StyleSheet,
   Text,
   TextStyle,
   View,
   ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

type ButtonProps = {
   children: React.ReactNode;
   onPress?: () => void;
   style?: StyleProp<ViewStyle>;
   textStyle?: StyleProp<TextStyle>;
};

const Button = (props: ButtonProps) => {
   return (
      <Pressable
         style={[styles.container, props.style]}
         android_ripple={{ color: COLORS.rippleSecondary }}
         onPress={props.onPress}>
         <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
      </Pressable>
   );
};

export default Button;

const styles = StyleSheet.create({
   container: {
      paddingVertical: 7,
      paddingHorizontal: 14,
      borderRadius: 4,
      backgroundColor: COLORS.secondary,
   },
   text: {
      fontFamily: 'Vazir',
   },
});
