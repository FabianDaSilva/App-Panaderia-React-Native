import * as Location from 'expo-location';

import {Alert, Button, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../constansts/Colors';
import {useState} from 'react';

const LocationSelector = (props) => {
	const [pickedLocation, setPickedLocation] = useState('');

	const handleGetLocation = async () => {
		const isLocationOk = await verifyPermissions();
		if (!isLocationOk) {
			return;
		}
		const location = await Location.getCurrentPositionAsync({
			timeout: 5000,
		});

		setPickedLocation({
			lat: location.coords.latitude,
			lng: location.coords.longitude,
		});
	};

	const verifyPermissions = async () => {
		const {status} = await Location.requestForegroundPermissionsAsync();
		if (status !== 'garanted') {
			Alert.alert('Insufficient permissions!', 'You need more permissions ', [
				{text: 'OK'},
			]);
			return false;
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{pickedLocation ? (
					<Text>
						{pickedLocation.lat},{pickedLocation.lng}
					</Text>
				) : (
					<Text>Not location chosen yet!</Text>
				)}
			</View>
			<Button
				title="Obetener location"
				color={COLORS.PEACH_PUFF}
				onPress={handleGetLocation}
			/>
		</View>
	);
};
export default LocationSelector;
const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	preview: {
		width: '100%',
		height: 200,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: COLORS.BLUSH,
		borderWidth: 1,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
