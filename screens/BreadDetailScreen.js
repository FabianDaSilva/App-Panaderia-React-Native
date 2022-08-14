import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

export const BreadDetailScreen = ({ route }) => {

	 
	const bread = useSelector(store => store.breads.selected);
 
	return (
	    <View style={styles.screen}>
		   <Text style={styles.title}>{bread.name}</Text>
		   <Text>{bread.description}</Text>
		   <Text>{bread.price}</Text>
		   <Text>{bread.weight}</Text>
	    </View>
	)
 }

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 20,
		fontFamily: 'IRegular',
		marginBottom: 10,
	},
});
