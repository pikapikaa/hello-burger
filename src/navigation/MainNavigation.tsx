import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from '../screens/Main/MainScreen';
import PlacesScreen from '../screens/Places/PlacesScreen';
import ImpressionsScreen from '../screens/Impressions/ImpressionsScreen';
import HousingScreen from '../screens/Housing/HousingScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const menuItems = [
  {
    id: '1',
    name: 'Home',
    icon: 'home',
    label: 'Главная',
    component: MainScreen,
  },
  {
    id: '2',
    name: 'Places',
    icon: 'location',
    label: 'Места',
    component: PlacesScreen,
  },
  {
    id: '3',
    name: 'Impressions',
    icon: 'map',
    label: 'Впечатления',
    component: ImpressionsScreen,
  },
  {
    id: '4',
    name: 'Housing',
    icon: 'search',
    label: 'Жилье',
    component: HousingScreen,
  },
  {
    id: '5',
    name: 'Profile',
    icon: 'person',
    label: 'Профиль',
    component: ProfileScreen,
  },
];

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: 'SF-Pro-Display-Regular',
            color: '#3D4252',
            paddingBottom: 5,
          },
          tabBarStyle: {padding: 5, height: 60},
        }}>
        {menuItems.map(menuItem => (
          <Tab.Screen
            key={menuItem.id}
            name={menuItem.name}
            component={menuItem.component}
            options={{
              tabBarLabel: menuItem.label,
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? menuItem.icon : `${menuItem.icon}-outline`}
                  color="#3D4252"
                  size={24}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
