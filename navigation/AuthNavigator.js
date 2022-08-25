import AuthScreen from '../screens/AuthScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator initialRouteNam="Auth" screenOptions={{headerShown: false}}>
		<Stack.Screen name="Auth" component={AuthScreen} />
	</Stack.Navigator>
);

export default AuthNavigator;
