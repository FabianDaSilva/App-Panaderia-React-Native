import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useEffect} from 'react';

import {getOrders} from '../store/actions/order.action';
import {useSelector} from 'react-redux';

const OrderScreen = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders.orders);
	useEffect(() => {
		dispatch(getOrders());
	}, []);

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
export default OrderScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 10,
	},
});
