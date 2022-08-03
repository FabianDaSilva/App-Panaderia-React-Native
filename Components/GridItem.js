import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const GridItem = ({item, onSelected}) => {
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				onPress={() => onSelected(item)}
				style={{...styles.container, backgroundColor: item.color}}
			>
				<View>
					<Text style={styles.title}>{item.title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		borderRadius: 6,
		margin: 15,
		height: 150,
	},
	container: {
		flex: 1,
		borderRadius: 6,
		shadowColor: 'Colors.neutralsOne',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'IMedium',
	},
});

export default GridItem;
