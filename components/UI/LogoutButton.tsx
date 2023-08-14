import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import type _default from '@expo/vector-icons/build/MaterialIcons';
import { COLORS } from '../../constants/Colors';
import { Screens } from '../../routes';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
   const navigation = useNavigation<Screens>();

   function logoutHandler() {
      navigation.navigate('SignScreen');
   }

   return (
      <View style={styles.outerContainer}>
         <Pressable
            android_ripple={{ color: COLORS.error }}
            style={styles.container}
            onPress={logoutHandler}>
            <MaterialIcons
               name='logout'
               size={24}
               color={COLORS.error}
            />
         </Pressable>
      </View>
   );
};

export default LogoutButton;

const styles = StyleSheet.create({
   outerContainer: {
      borderRadius: 50,
      overflow: 'hidden',
   },
   container: {
      padding: 5,
   },
});
