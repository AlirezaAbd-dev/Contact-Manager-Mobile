import { Text } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants/Colors';

const ErrorText = (props: { text: string }) => {
   return (
      <Text
         style={{
            fontFamily: 'Vazir',
            color: COLORS.error,
         }}
      >
         {props.text}
      </Text>
   );
};

export default ErrorText;
