import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import GridItem from '../Components/GridItem'
import React from 'react'
import { selectCategory } from '../store/actions/category.action'

export const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(store => store.categories.categories)
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', {
            name: item.title
        });
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <FlatList
            data={categories}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={item => item.id}
        />
    ); 
}