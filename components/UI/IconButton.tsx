import {
   Pressable,
   StyleSheet,
   View,
   StyleProp,
   ViewStyle,
} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import type _default from '@expo/vector-icons/build/MaterialIcons';

type IconButtonType = {
   onPress?: () => void;
   icon: any;
   size: number;
   color: string;
   style?: StyleProp<ViewStyle>;
};

const IconButton = (props: IconButtonType) => {
   return (
      <View style={styles.outerContainer}>
         <Pressable
            android_ripple={{ color: props.color }}
            style={[styles.container, props.style]}
            onPress={props.onPress}>
            <MaterialIcons
               name={props.icon}
               size={props.size}
               color={props.color}
            />
         </Pressable>
      </View>
   );
};

export default IconButton;

const styles = StyleSheet.create({
   outerContainer: {
      borderRadius: 7,
      overflow: 'hidden',
   },
   container: {
      paddingVertical: 5,
      paddingHorizontal: 15,
   },
});
