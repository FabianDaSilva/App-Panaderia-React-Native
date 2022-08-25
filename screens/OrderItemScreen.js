import {FlatList, StyleSheet, View} from 'react-native';
import {deleteOrder, getOrders} from '../store/actions/order.action';
import {useDispatch, useSelector} from 'react-redux';

import OrderItem from '../Components/OrderItem';
import React from 'react';
import { useEffect } from 'react';

const OrderItemScreen = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.order.list);
	console.log(orders, 'soy orders');
	useEffect(() => {
		dispatch(getOrders());
	}, []);

	const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id));

	const renderCartItem = ({item}) => (
		<OrderItem item={item} onDelete={onHandlerDeleteItem} />
	);

	return (
		<View style={styles.container}>
		<FlatList
		    data={orders}
		    renderItem={renderCartItem}
		    keyExtractor={(item) => item.id}
		    numColumns={1}
		    onRefresh={() => dispatch(getOrders())}
		    refreshing={false}
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
