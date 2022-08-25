import {StyleSheet, Text, View} from 'react-native';

import CartNavigator from './CartNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderScreen from '../screens/OrderScreen';
import OrdersNavigator from './OrdersNavigator';
import React from 'react';
import ShopNavigator from './ShopNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const TabNavigator = () => {
	const ButtomTabs = createBottomTabNavigator();
	return (
		<ButtomTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
			}}
		>
			<ButtomTabs.Screen
				name="ShopTab"
				component={ShopNavigator}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={styles.item}>
							<Ionicons
								name="md-home"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text>Home</Text>
						</View>
					),
				}}
			/>

			<ButtomTabs.Screen
				name="CartTab"
				component={CartNavigator}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={styles.item}>
							<Ionicons
								name="md-cart"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text>Tienda</Text>
						</View>
					),
				}}
			/>
			<ButtomTabs.Screen
				name="OrderTab"
				component={OrdersNavigator}
				options={{
					tabBarIcon: ({focused}) => (
						<View style={styles.item}>
							<Ionicons
								name="cash-outline"
								size={24}
								color={focused ? 'blue' : 'black'}
							/>
							<Text style={{color: focused ? 'blue' : 'black'}}>Orders</Text>
						</View>
					),
				}}
			/>
		</ButtomTabs.Navigator>
	);
};

export default TabNavigator;
const styles = StyleSheet.create({
	tabBar: {
		shadowColor: '#7f5df0',
		shadowOffset: {width: 0, height: 10},
		shadowOpacity: 0.25,
		shadowRadius: 0.25,
		elevation: 5,
		position: 'absolute',
		bottom: 25,
		left: 20,
		right: 20,
		borderRadius: 15,
		height: 90,
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
