import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export const CategoryBreadScreen = ({navigation}) => {
	return (
		<View style={styles.screen}>
			<Text>Productos de la categoria</Text>
			<Button
				title="Ir al detalle"
				onPress={() => {
					navigation.navigate('Detail');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
