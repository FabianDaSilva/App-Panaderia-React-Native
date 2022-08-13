import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';
import {Provider} from 'react-redux';
import store from './store';
import {useFonts} from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		IRegular: require('./assets/fonts/Ir.ttf'),
		IMedium: require('./assets/fonts/Im.ttf'),
		IBold: require('./assets/fonts/Ib.ttf'),
	});
	if (!loaded) return <AppLoading />;

	return (
		<Provider store={store}>
			<MainNavigation />
		</Provider>
	);
}
