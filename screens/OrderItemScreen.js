import {FlatList, StyleSheet, View} from 'react-native';

import {ORDERS} from '../data/order';
import OrderItem from '../Components/OrderItem';
import React from 'react';

const orders = ORDERS;
const onHandlerDeleteItem = () => {};
const renderCartItem = ({item}) => (
	<OrderItem item={item} onDelete={onHandlerDeleteItem} />
);
const OrderItemScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				renderItem={renderCartItem}
				keyExtractor={(item) => item.id}
				numColumns={1}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10,
	},
});
export default OrderItemScreen;
