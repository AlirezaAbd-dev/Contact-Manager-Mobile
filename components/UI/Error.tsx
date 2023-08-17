import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

type ErrorProps = {
   errorMessage: string;
};

const Error = (props: ErrorProps) => {
   return (
      <Text
         style={{
            color: COLORS.error,
            fontFamily: 'Vazir',
            alignSelf: 'center',
         }}
      >
         {props.errorMessage}
      </Text>
   );
};

export default Error;

const styles = StyleSheet.create({});
