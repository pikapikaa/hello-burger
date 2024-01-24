import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../MainScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Settings" component={MainScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
