import { StyleSheet, View } from 'react-native';
import React from 'react';

import { AutoCompleteData } from '../../screens/HomeScreen';
import { COLORS } from '../../constants/Colors';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';

type AutoCompleteProps = {
   autoCompleteData: AutoCompleteData[];
};

const AutoComplete = (props: AutoCompleteProps) => {
   const navigation = useNavigation<Screens>();

   return (
      <View>
         <Dropdown
            data={props.autoCompleteData}
            placeholder='دنبال کی میگردی؟'
            searchPlaceholder='جستجو'
            style={{
               borderRadius: 20,
               borderWidth: 0.17,
               marginTop: 10,
               borderColor: COLORS.primary,
            }}
            containerStyle={{
               backgroundColor: COLORS.background,
               borderColor: COLORS.primary,
               borderRadius: 20,
               maxHeight: 300,
            }}
            selectedTextStyle={{ color: COLORS.primary }}
            placeholderStyle={{ color: 'white', marginRight: 10 }}
            itemTextStyle={{ color: 'white' }}
            inputSearchStyle={{
               textAlign: 'right',
               backgroundColor: COLORS.card,
               borderRadius: 20,
               borderColor: COLORS.primary,
               color: 'white',
               direction: 'rtl',
            }}
            activeColor={COLORS.card}
            search
            labelField='title'
            valueField='id'
            onChange={(selected) => {
               navigation.navigate('Details', { id: selected.id });
            }}
         />
      </View>
   );
};

export default AutoComplete;

const styles = StyleSheet.create({});
