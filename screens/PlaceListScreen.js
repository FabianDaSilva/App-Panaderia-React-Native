import {FlatList, StyleSheet, Text, View} from 'react-native';

import PlaceItems from '../Components/PlaceItems';
import {useSelector} from 'react-redux';

const PlaceListScreen = ({navigation}) => {
	const places = useSelector((state) => state.places.places);

  
	const renderItem = (data) => (
		<PlaceItems
			title={data.item.title}
			image={data.item.image}
			address="dasdasdas dsadsa222 552"
			onSelect={() => navigation.navigate('Detalle')}
		/>
	);

  
	return (
		<FlatList
			data={places}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
};
export default PlaceListScreen;
const styles = StyleSheet.create({});
