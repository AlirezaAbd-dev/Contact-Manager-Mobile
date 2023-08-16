import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Routes = {
   SignScreen: undefined;
   Home: undefined;
   AddContact: undefined;
   EditContact: { id: string };
};

type Screens = NativeStackNavigationProp<Routes>;
type ScreenParams = RouteProp<Routes>;
