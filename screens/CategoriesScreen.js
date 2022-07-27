import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

export const CategoriesScreen = ({navigation}) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Categorias</Text>
			<Button
				title="Ir a Productos"
				onPress={() => {
					navigation.navigate('Breads');
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
	title: {
		fontSize: 20,
		fontFamily: 'OS',
		marginBottom: 10,
	},
});
