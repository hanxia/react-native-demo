import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from './Discover'



const DiscoverStackNavigation = createStackNavigator();

export default function DiscoverStack() {
    return (
        <DiscoverStackNavigation.Navigator>
            <DiscoverStackNavigation.Screen
                name="Discover"
                component={Discover}
            />
        </DiscoverStackNavigation.Navigator>
    )
}