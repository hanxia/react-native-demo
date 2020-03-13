import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details</Text>
        </View>
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

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Details" component={DetailsScreen} />
        </MainStack.Navigator>
    );
}

export default function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{ headerShown: false }}
                />
                <RootStack.Screen name="MyModal" component={ModalScreen} />
            </RootStack.Navigator>
        </NavigationContainer>

    );
}