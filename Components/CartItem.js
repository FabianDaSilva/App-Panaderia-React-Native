import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';

export const CartItem = ({item, onDelete}) => {
	return (
		<View style={styles.item}>
			<View>
				<Text style={styles.header}>{item.name}</Text>
			</View>
			<View style={styles.detail}>
				<Text>Cantidad : {item.quantity}</Text>
				<Text>${item.price}</Text>
				<TouchableOpacity onPress={() => onDelete(item.id)}>
                    <AntDesign name="delete" size={24} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
};



const styles = StyleSheet.create({
     item: {
          flex: 1,
          padding: 8,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
      },
      header: {
          fontSize: 18,
          fontFamily: 'IRegular',
      },
      detail: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
      },
      text: {
          fontSize: 16,
          fontFamily: 'OpenSans'
      }   
});
