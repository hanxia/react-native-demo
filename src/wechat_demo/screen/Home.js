import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ChatStack from './chat_stack/ChatStack'
import ContactStack from './contact_stack/ContactStack'
import DiscoverStack from './discover_stack/DiscoverStack'
import MeStack from './me_stack/MeStack'

const Tab = createBottomTabNavigator();



class Home extends React.Component {
    render() {
        const { navigation } = this.props

        navigation.setOptions({
            headerLeft: () => (
                <Button title="" />
            ),

        });        
        
        navigation.dangerouslyGetParent().setOptions({
          tabBarVisible: false
        });


        return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Chat') {
                    iconName = focused
                      ? 'pencil'
                      : 'pencil';
                  } else if (route.name === 'Contact') {
                    iconName = focused ? 'book' : 'book';
                  } else if (route.name === 'Discover') {
                    iconName = focused ? 'gg-circle' : 'gg-circle';
                  } else if (route.name === 'Me') {
                    iconName = focused ? 'user' : 'user';
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />
                },
              })}
            
            >
                <Tab.Screen name="Chat" options={{ title: 'Chat' }} component={ChatStack} />
                <Tab.Screen name="Contact" options={{ title: 'Contact' }} component={ContactStack} />
                <Tab.Screen name="Discover" options={{ title: 'Discover' }} component={DiscoverStack} />
                <Tab.Screen name="Me" options={{ title: 'Me' }} component={MeStack} />
            </Tab.Navigator>
        );
    }
}


export default function (props) {
    return <Home {...props} navigation={useNavigation()} />;
}

