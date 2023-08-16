import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { COLORS } from '../../constants/Colors';

type SignCardProps = {
   children: ReactNode;
   title: string;
};

const SignCard = (props: SignCardProps) => {
   return (
      <KeyboardAvoidingView style={styles.container}>
         <View style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
         </View>
      </KeyboardAvoidingView>
   );
};

export default SignCard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: COLORS.background,
      padding: 20,
      paddingTop: 50,
   },
   title: {
      color: 'white',
      fontFamily: 'Vazir',
      fontSize: 24,
      marginBottom: 10,
   },
   card: {
      alignItems: 'center',
      width: '100%',
      backgroundColor: COLORS.card,
      borderRadius: 8,
      padding: 20,
      elevation: 8,
   },
});
