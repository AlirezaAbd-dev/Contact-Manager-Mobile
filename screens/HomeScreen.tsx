import {
   ActivityIndicator,
   FlatList,
   StyleSheet,
   View,
   RefreshControl,
} from 'react-native';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import MainContactCard from '../components/cards/MainContactCard';
import { getContactsAPI } from '../APIs/contactAPIs';
import useToken from '../hooks/useToken';
import { COLORS } from '../constants/Colors';
import Error from '../components/UI/Error';
import AutoComplete from '../components/Home/AutoComplete';
import NoContact from '../components/Home/NoContact';

export type AutoCompleteData = {
   id: string;
   title: string;
};

const HomeScreen = () => {
   const token = useToken();

   const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
      ['contacts', token],
      getContactsAPI,
   );

   if (!data && !isLoading && !isError) {
      refetch();
   }

   const autoCompleteData = useMemo(() => {
      if (data) {
         return data.map((item) => ({ id: item._id, title: item.fullname }));
      } else {
         return [];
      }
   }, [data]);

   return (
      <View style={styles.container}>
         {isLoading && (
            <ActivityIndicator
               style={{ alignSelf: 'center', marginTop: 20 }}
               size={'large'}
               color={COLORS.primary}
            />
         )}

         {!isLoading && isError && (
            <Error
               errorMessage={
                  (error as any).response.data.message ||
                  'خطایی در ارتباط با سرور پیش آمد!'
               }
            />
         )}

         {!isLoading && data?.length === 0 && <NoContact />}

         {!isLoading && data && data.length > 0 && (
            <View style={{ flex: 1 }}>
               <AutoComplete autoCompleteData={autoCompleteData} />
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
            </View>
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
