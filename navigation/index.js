import React, { useState } from 'react';
import {Text, View} from 'react-native';

import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const MainNavigation = () => {
	const [user, setUser] = useState(null);

	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default MainNavigation;
