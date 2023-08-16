import { StyleSheet, View } from 'react-native';
import React, { ReactNode } from 'react';
import { COLORS } from '../../constants/Colors';

const CardDetails = ({ children }: { children: ReactNode }) => {
   return <View style={styles.cardDetails}>{children}</View>;
};

export default CardDetails;

const styles = StyleSheet.create({
   cardDetails: {
      margin: 10,
      padding: 15,
      backgroundColor: COLORS.accent,
      borderRadius: 25,
   },
});
