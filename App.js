import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';
import { useFonts } from 'expo-font';
export default function App() {
	const [loaded] = useFonts({
		IRegular: require('./assets/fonts/Ir.ttf'),
		IMedium: require('./assets/fonts/Im.ttf'),
		IBold: require('./assets/fonts/Ib.ttf'),
	});
	if (!loaded) return <AppLoading />;

	return (
		<MainNavigation/>
	);
}
