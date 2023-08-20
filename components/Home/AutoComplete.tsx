import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { COLORS } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../routes';
import { AutoCompleteData } from '../../screens/HomeScreen';

type AutoCompleteProps = {
   autoCompleteData: AutoCompleteData[];
};

const AutoComplete = (props: AutoCompleteProps) => {
   const navigation = useNavigation<Screens>();

   return (
      <AutocompleteDropdown
         clearOnFocus={true}
         dataSet={props.autoCompleteData}
         textInputProps={{
            placeholder: 'دنبال کی میگردی؟',
            autoCorrect: false,
            cursorColor: COLORS.primary,
            style: {
               color: '#fff',
            },
         }}
         suggestionsListContainerStyle={styles.suggestionsListContainerStyle}
         inputContainerStyle={styles.inputContainerStyle}
         suggestionsListTextStyle={styles.suggestionsListTextStyle}
         ItemSeparatorComponent={
            <View style={styles.separatorComponent}></View>
         }
         onSelectItem={(prop) => {
            if (prop?.id) navigation.navigate('Details', { id: prop.id });
         }}
         renderItem={(prop) => {
            return <Text style={styles.itemText}>{prop.title}</Text>;
         }}
      />
   );
};

export default AutoComplete;

const styles = StyleSheet.create({
   suggestionsListContainerStyle: {
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: COLORS.background,
   },
   inputContainerStyle: {
      backgroundColor: COLORS.background,
      borderWidth: 0.4,
      borderRadius: 10,
      borderColor: COLORS.primary,
   },
   suggestionsListTextStyle: {
      color: 'white',
   },
   separatorComponent: {
      borderBottomWidth: 0.17,
      borderColor: COLORS.primary,
   },
   itemText: {
      color: 'white',
      padding: 10,
      paddingRight: 20,
      fontFamily: 'Vazir',
      fontWeight: 'bold',
   },
});
