

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

import Login from './Login'
import ResetPwd from './ResetPwd'
import Register from './Register'
import Home from './Home'
import Result from './Result'


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export default function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="MyModal" component={ModalScreen} options={{headerShown: false}} />
            </RootStack.Navigator>
        </NavigationContainer>

    );
}

function MainStackScreen() {
    return (
        <MainStack.Navigator initialRouteName='Login'
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal"
            }}>
            <MainStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <MainStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <MainStack.Screen name="Register" component={Register} />
            <MainStack.Screen name="Result" component={Result} />
            <MainStack.Screen name="ResetPwd" component={ResetPwd} />
        </MainStack.Navigator>
    );
}

function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}



