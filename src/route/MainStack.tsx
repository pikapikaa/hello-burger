import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MainScreen from '../screens/Main/MainScreen';
import PopularPlacesScreen from '../screens/Popular/PopularPlacesSceen';
import PlaceScreen from '../screens/Places/PlaceScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        contentStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}
      initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="PopularPlacesScreen"
        component={PopularPlacesScreen}
        options={{
          headerShown: true,
          title: 'Популярные места',
          headerTitleStyle: {fontFamily: 'SF-Pro-Display-Bold', fontSize: 20},
        }}
      />
      <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
