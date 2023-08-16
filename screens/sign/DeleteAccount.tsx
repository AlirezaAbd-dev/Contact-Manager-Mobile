import { Pressable, StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'react-native-bouncy-checkbox';

import SignCard from '../../components/layouts/SignCard';
import CustomTextInput from '../../components/UI/TextInput';
import { COLORS } from '../../constants/Colors';
import Button from '../../components/UI/Button';

const DeleteAccount = () => {
   const [isChecked, setIsChecked] = useState(false);

   return (
      <SignCard title='حذف حساب'>
         <CustomTextInput
            keyboardType='email-address'
            focusable={true}
            placeholder='ایمیل'
         />
         <CustomTextInput
            secureTextEntry={true}
            placeholder='رمز عبور'
         />
         <View style={styles.checkBoxContainer}>
            <Pressable onPress={() => setIsChecked((prev) => !prev)}>
               <Text style={styles.checkboxLabel}>
                  مطمئنم که میخواهم حساب خود را حذف کنم.
               </Text>
            </Pressable>
            <Checkbox
               onPress={(onpress) => {
                  setIsChecked((prev) => !prev);
               }}
               fillColor={COLORS.primary}
               isChecked={isChecked}
               disableBuiltInState={true}
               disableText={true}
            />
         </View>
         <Button
            disabled={!isChecked}
            withIcon={false}
            style={styles.deleteAccountButton}>
            حذف حساب
         </Button>
      </SignCard>
   );
};

export default DeleteAccount;

const styles = StyleSheet.create({
   checkBoxContainer: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 20,
      width: '100%',
   },
   checkboxLabel: {
      color: 'white',
      fontSize: 12,
      fontFamily: 'Vazir',
   },
   deleteAccountButton: {
      marginTop: 10,
   },
});
