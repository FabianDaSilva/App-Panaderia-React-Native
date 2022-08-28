import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS} from '../constansts/Colors';
import ImageSelector from '../Components/ImageSelector';
import {addPlace} from '../store/actions/places.action';
import {useDispatch} from 'react-redux';

const NewPlaceScreen = ({navigation, route}) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');

	const handleTitleChange = (text) => setTitle(text);

	const handleSave = () => {
		dispatch(addPlace(title));
		navigation.navigate('Direcciones');
	};
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.label}>Titulo</Text>
				<TextInput
					styles={styles.input}
					value={title}
					onChangeText={handleTitleChange}
				/>
				  <ImageSelector onImage={image => setImage(image)} />
				<Button
					color={COLORS.MAROON}
					title="Grabar Direccion"
					onPress={handleSave}
				/>
			</View>
		</ScrollView>
	);
};
export default NewPlaceScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 30,
	},
	label: {
		fontSize: 18,
		marginBottom: 16,
	},
	input: {
		borderBottomColor: '#ccc',
		borderButtomWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 2,
		paddingVertical: 4,
	},
});
