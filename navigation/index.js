import React, { useState } from 'react'

import AuthNavigator from './AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import { useSelector } from 'react-redux'

const MainNavigation = () => {

  const userId = useSelector(state => state.auth.userId);
  
  return (
    <NavigationContainer>
   {/*    { userId ? 
        : 
        <AuthNavigator />
      } */}
        <TabNavigator />
    </NavigationContainer>
  )
}

export default MainNavigation