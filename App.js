import AppLoading from 'expo-app-loading';
import ShopNavigatior from './navigation/ShopNavigation';
import {StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		OS: require('./assets/fonts/OS.ttf'),
	});
	if (!loaded) return <AppLoading />;
	
	return <ShopNavigatior />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
