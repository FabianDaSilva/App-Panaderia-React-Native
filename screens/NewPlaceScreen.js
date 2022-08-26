import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import {COLORS} from '../constansts/Colors';

const NewPlaceScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.label}>Titulo</Text>
				<TextInput styles={styles.input} />
				<Button
					color={COLORS.MAROON}
					title="Grabar Direccion"
					onPress={() => {}}
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
