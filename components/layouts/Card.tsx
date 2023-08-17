import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

const Card = ({ children }: { children: React.ReactNode }) => {
   return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
   card: {
      backgroundColor: COLORS.card,
      width: '100%',
      borderRadius: 30,
   },
});
