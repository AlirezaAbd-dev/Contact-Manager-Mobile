import {
   ActivityIndicator,
   FlatList,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import React from 'react';
import { useQuery } from 'react-query';

import MainContactCard from '../components/cards/MainContactCard';
import Button from '../components/UI/Button';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../routes';
import { getContactsAPI } from '../APIs/contactAPIs';
import useToken from '../hooks/useToken';
import { COLORS } from '../constants/Colors';
import Error from '../components/UI/Error';

const HomeScreen = () => {
   const token = useToken();
   const navigation = useNavigation<Screens>();
   const { data, isLoading, isError, error } = useQuery(
      ['contacts', token],
      getContactsAPI,
   );

   return (
      <View style={styles.container}>
         <Button
            withIcon={true}
            iconAlign='Left'
            icon='add-circle'
            iconColor='black'
            iconSize={20}
            style={styles.addNewContactButton}
            onPress={() => {
               navigation.navigate('AddContact');
            }}
         >
            ساخت مخاطب جدید
         </Button>
         {isLoading && (
            <ActivityIndicator
               style={{ alignSelf: 'center' }}
               size={'large'}
               color={COLORS.primary}
            />
         )}

         {!isLoading && isError && (
            <Error
               errorMessage={
                  (error as any).response.data.message || (error as any).message
               }
            />
         )}

         {!isLoading && data && data.length > 0 && (
            <FlatList
               style={{ flex: 1 }}
               data={data}
               keyExtractor={(item) => item._id}
               renderItem={({ item }) => {
                  return (
                     <MainContactCard
                        key={item._id}
                        {...item}
                     />
                  );
               }}
            />
         )}
      </View>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 20,
   },
   addNewContactButton: {
      alignSelf: 'flex-end',
      marginVertical: 10,
      borderRadius: 20,
   },
});
