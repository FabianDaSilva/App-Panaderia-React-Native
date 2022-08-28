import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';
import { Provider } from 'react-redux'
import { init } from './db'
import store from './store'
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
  })

export default function App() {
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

