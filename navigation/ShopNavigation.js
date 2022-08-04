import { Image, Platform } from 'react-native';

import { BreadDetailScreen } from '../screens/BreadDetailScreen';
import { COLORS } from '../constansts/Colors';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { CategoryBreadScreen } from '../screens/CategoryBreadScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
		
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor:
							Platform.OS === 'android' ? COLORS.primary : COLORS.secondary,
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
				<Stack.Screen
					name="Home"
					component={CategoriesScreen}
					options={{title: 'Bakery'}}
				/>
				<Stack.Screen
					name="Products"
					component={CategoryBreadScreen}
					options={({route}) => ({title: route.params.name})}
				/>
				<Stack.Screen
					name="Detail"
					component={BreadDetailScreen}
					options={({route}) => ({title: route.params.bread.name})}
				/>
			</Stack.Navigator>
	
	);
};
export default ShopNavigatior;
