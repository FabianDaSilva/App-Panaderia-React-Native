import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

export const BreadDetailScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Detalle del producto</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 20,
		fontFamily: 'OS',
		marginBottom: 10,
	},
});
