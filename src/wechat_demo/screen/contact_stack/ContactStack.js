import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Contact from './Contact'
import Demo1 from './Demo1'
import Demo2 from './Demo2'



const ContactStackNavigation = createStackNavigator();

class ContactStack extends React.Component {
    render() {
        const { navigation } = this.props
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        });

        return (
            <ContactStackNavigation.Navigator
                screenOptions={{
                    gestureEnabled: true,
                }}


            >
                <ContactStackNavigation.Screen
                    name="Contact"
                    component={Contact}
                />
                <ContactStackNavigation.Screen
                    name="Demo1"
                    component={Demo1}
                />
                <ContactStackNavigation.Screen
                    name="Demo2"
                    component={Demo2}
                />
            </ContactStackNavigation.Navigator>
        )
    }
}

export default function (props) {
    return <ContactStack {...props} navigation={useNavigation()} />;
}