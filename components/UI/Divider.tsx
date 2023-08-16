import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

const Divider = () => {
   return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
   divider: {
      borderTopWidth: 0.5,
      borderColor: COLORS.background,
   },
});
