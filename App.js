import AppLoading from 'expo-app-loading';
import ShopNavigatior from './navigation/ShopNavigation';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		IRegular: require('./assets/fonts/Ir.ttf'),
		IMedium:require("./assets/fonts/Im.ttf"),
		IBold: require("./assets/fonts/Ib.ttf")
	});
	if (!loaded) return <AppLoading />;
	
	return <ShopNavigatior />;
}

