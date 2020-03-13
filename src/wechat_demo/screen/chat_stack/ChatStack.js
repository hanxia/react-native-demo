import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './Chat'
import ChatDetail from './ChatDetail'



const ChatStackNavigation = createStackNavigator();

export default function ChatStack() {
    return (
        <ChatStackNavigation.Navigator navigationOptions={{tabBarVisible: false}}>
            <ChatStackNavigation.Screen
                name="Chat"
                component={Chat}
            />
            <ChatStackNavigation.Screen name="ChatDetail" component={ChatDetail}/>
        </ChatStackNavigation.Navigator>
    )
}


