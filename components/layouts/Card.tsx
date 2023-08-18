import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

const Card = ({
   children,
   style,
}: {
   children: React.ReactNode;
   style?: StyleProp<ViewStyle>;
}) => {
   return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
   card: {
      backgroundColor: COLORS.card,
      width: '100%',
      borderRadius: 30,
   },
});
