import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Routes = {
   SignScreen: { token: string };
   Home: undefined;
   AddContact: undefined;
   EditContact: { id: string };
   Details: { id: string };
};

type Screens = NativeStackNavigationProp<Routes>;
type ScreenParams = RouteProp<Routes>;
type SignScreenParams = RouteProp<Routes, 'SignScreen'>;
type EditContactScreenParams = RouteProp<Routes, 'EditContact'>;
type DetailsScreenParams = RouteProp<Routes, 'Details'>;
