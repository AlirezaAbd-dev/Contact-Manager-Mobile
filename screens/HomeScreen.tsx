import {
   ActivityIndicator,
   FlatList,
   StyleSheet,
   View,
   Text,
   RefreshControl,
   Image,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useQuery } from 'react-query';

import MainContactCard from '../components/cards/MainContactCard';
import { getContactsAPI } from '../APIs/contactAPIs';
import useToken from '../hooks/useToken';
import { COLORS } from '../constants/Colors';
import Error from '../components/UI/Error';
import Button from '../components/UI/Button';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../routes';

const HomeScreen = () => {
   const token = useToken();
   const navigation = useNavigation<Screens>();

   useLayoutEffect(() => {
      if (!token) {
         navigation.replace('SignScreen');
      }
   }, [token]);

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
            <>
               <Image
                  source={require('../assets/images/404_test_1a.gif')}
                  style={{ width: '100%', height: 'auto', aspectRatio: 16 / 9 }}
               />
               <Text
                  style={{
                     color: 'white',
                     fontFamily: 'Vazir',
                     alignSelf: 'center',
                     marginTop: 10,
                  }}
               >
                  شما در حال حاظر هیچ مخاطبی را ثبت نکرده اید.
               </Text>
               <Button
                  withIcon={false}
                  style={{
                     borderRadius: 20,
                     alignSelf: 'center',
                     marginTop: 30,
                  }}
                  onPress={() => navigation.navigate('AddContact')}
               >
                  ساخت مخاطب جدید
               </Button>
            </>
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
