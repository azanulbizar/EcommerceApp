import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';
import DetailsScreen from './views/Details';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: { title: 'Details' }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default AppNavigator;