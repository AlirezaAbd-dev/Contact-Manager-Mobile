import { I18nManager, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

const MainHeaderTitle = () => {
   return (
      <View style={styles.headerContainer}>
         <Text style={[styles.headerTitle1, styles.headerTitle]}>
            اپلیکیشن مدیریت
         </Text>
         <Text style={[styles.headerTitle2, styles.headerTitle]}>مخاطبین</Text>
      </View>
   );
};

export default MainHeaderTitle;

const styles = StyleSheet.create({
   headerContainer: {
      flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
      gap: 4,
   },
   headerTitle: {
      fontFamily: 'Vazir',
      fontSize: 18,
      fontWeight: 'bold',
   },
   headerTitle1: {
      color: 'white',
   },
   headerTitle2: {
      color: COLORS.primary,
   },
});
