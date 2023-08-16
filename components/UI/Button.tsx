import {
   Pressable,
   StyleProp,
   StyleSheet,
   Text,
   TextStyle,
   View,
   ViewStyle,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { COLORS } from '../../constants/Colors';

type ButtonProps = {
   children: React.ReactNode;
   onPress?: () => void;
   style?: StyleProp<ViewStyle>;
   textStyle?: StyleProp<TextStyle>;
   rippleColor?: string;
   disabled?: boolean;
} & (
   | {
        withIcon: true;
        icon: any;
        iconAlign: 'Right' | 'Left';
        iconSize: number;
        iconColor: string;
     }
   | { withIcon: false | undefined }
);

const Button = ({ ...props }: ButtonProps) => {
   return (
      <View
         style={[
            styles.outerContainer,
            props.style,
            props.disabled && styles.disabled,
         ]}>
         <Pressable
            disabled={props.disabled}
            style={[styles.container]}
            android_ripple={{
               color: props.rippleColor || COLORS.rippleSecondary,
            }}
            onPress={props.onPress}>
            {props.withIcon && props.icon && props.iconAlign === 'Left' && (
               <MaterialIcons
                  name={props.icon}
                  color={props.iconColor}
                  size={props.iconSize}
               />
            )}
            <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
            {props.withIcon && props.icon && props.iconAlign === 'Right' && (
               <MaterialIcons
                  name={props.icon}
                  color={props.iconColor}
                  size={props.iconSize}
               />
            )}
         </Pressable>
      </View>
   );
};

export default Button;

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      paddingVertical: 7,
      paddingHorizontal: 14,
   },
   outerContainer: {
      backgroundColor: COLORS.secondary,
      overflow: 'hidden',
      borderRadius: 4,
   },
   text: {
      fontFamily: 'Vazir',
   },
   disabled: {
      backgroundColor: COLORS.accent,
   },
});
