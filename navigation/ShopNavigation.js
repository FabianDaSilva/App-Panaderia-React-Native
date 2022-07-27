import {BreadDetailScreen} from '../screens/BreadDetailScreen';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CategoryBreadScreen} from '../screens/CategoryBreadScreen';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Logo = () => {
	return (
		<Image
			source={require('../assets/image/bakery.png')}
			style={{
				width: 100,
				height: 100,
				alignContent: 'center',
				alignItems: 'center',
			}}
		/>
	);
};
const ShopNavigatior = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: '#00bfff',
					},
					headerTinColor: 'black',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
				options={{
					headerTitle: (props) => <Logo {...props} />,
				}}
			>
				<Stack.Screen name="Home" component={CategoriesScreen} />
				<Stack.Screen name="Breads" component={CategoryBreadScreen} />
				<Stack.Screen name="Detail" component={BreadDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default ShopNavigatior;
