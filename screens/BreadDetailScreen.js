import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { addItem } from '../store/actions/cart.actions'

export const BreadDetailScreen = ({ navigation }) => {


    const dispatch = useDispatch()
    const bread = useSelector(store => store.breads.selected)
    const handlerAddItemCart = () => dispatch(addItem(bread))
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text>{bread.description}</Text>
            <Text>{bread.price}</Text>
            <Text>{bread.weight}</Text>
            <Button title='Agregar al carrito' onPress={handlerAddItemCart} />
            <Ionicons name='cart' size={24} color='white' />
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
        fontFamily: 'OpenSansBold',
        marginBottom: 10
    }
})