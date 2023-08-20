import { Pressable, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants/Colors';
import { Screens } from '../../routes';
import { TokenContext } from '../../context/tokenContext';

const LogoutButton = () => {
   const navigation = useNavigation<Screens>();
   const { setToken } = useContext(TokenContext);

   async function logoutHandler() {
      await AsyncStorage.removeItem('token');
      setToken(null);
      navigation.replace('SignScreen');
   }

   return (
      <View style={styles.outerContainer}>
         <Pressable
            android_ripple={{ color: COLORS.error }}
            style={styles.container}
            onPress={logoutHandler}
         >
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
