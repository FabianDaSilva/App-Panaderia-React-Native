import * as ImagePicker from 'expo-image-picker';

import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../constansts/Colors';
import {useState} from 'react';

/* 
import * as Permissions from 'expo-permissions'; */






export default function ImageSelector() {
	const [pickedUri, setPickedUri] = useState('');

	const veryPermission = async () => {
		const {status} = await ImagePicker.requestCameraPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert(
				'No tienes permisos para usar la camara',
				'Necesitas dar permisos para usar la camara',
				[{text: 'Ok'}]
			);
			return false;
		}
		return true;
	};

	const handlerTakeImage = async () => {
		const isCameraOk = await veryPermission();
		if (!isCameraOk) return;

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.8,
		});

		setPickedUri(image.uri);
		props.onImage(image.uri);
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{!pickedUri ? (
					<Text>ImageSelector</Text>
				) : (
					<Image style={styles.image} source={{uri: pickedUri}} />
				)}
			</View>
			<Button
				title="Tomar foto"
				color={COLORS.LIGTH_PINK}
				onPress={handlerTakeImage}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	preview: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		borderColor: COLORS.BLUSH,
		borderWidth: 1,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
