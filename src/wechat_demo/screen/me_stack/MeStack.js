import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Me from './Me'



const MeStackNavigation = createStackNavigator();

export default function DiscoverStack() {
    return (
        <MeStackNavigation.Navigator>
            <MeStackNavigation.Screen
                name="Me"
                component={Me}
            />
        </MeStackNavigation.Navigator>
    )
}