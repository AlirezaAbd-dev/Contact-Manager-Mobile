import {
   ActivityIndicator,
   FlatList,
   StyleSheet,
   View,
   Text,
   RefreshControl,
} from 'react-native';
import React from 'react';
import { useQuery } from 'react-query';

import MainContactCard from '../components/cards/MainContactCard';
import { getContactsAPI } from '../APIs/contactAPIs';
import useToken from '../hooks/useToken';
import { COLORS } from '../constants/Colors';
import Error from '../components/UI/Error';

const HomeScreen = () => {
   const token = useToken();
   const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
      ['contacts', token],
      getContactsAPI,
   );
   return (
      <View style={styles.container}>
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

         {!isLoading && data?.length === 0 && (
            <Text
               style={{
                  color: 'white',
                  fontFamily: 'Vazir',
                  alignSelf: 'center',
               }}
            >
               شما در حال حاظر هیچ مخاطبی را ثبت نکرده اید.
            </Text>
         )}

         {!isLoading && data && data.length > 0 && (
            <FlatList
               style={{ flex: 1 }}
               data={data}
               refreshControl={
                  <RefreshControl
                     refreshing={isFetching}
                     onRefresh={refetch}
                     colors={[COLORS.primary]}
                     progressBackgroundColor={COLORS.background}
                  />
               }
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
});
