
import * as React from 'react';
import { Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';



const Stack = createStackNavigator();

const openConfig = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
    }
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 700,
        easing: Easing.linear
    }
};

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    animationTypeForReplace: "pop",
                    transitionSpec: {
                        open: openConfig,
                        close: closeConfig
                    }
                }}>
                <Stack.Screen options={{ title: 'My Home Screen', headerTitle: props => <LogoTitle {...props} /> }} name="Home" component={Home} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
      />
    );
  }

function Home({ navigation }) {
    navigation.setOptions({
        
        headerRight: () => (
            <Button title='Save' onPress={() => alert('save pressed')}>
            </Button>
        )
    });


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button title='Settings' onPress={() => navigation.push('Settings', {
                itemId: '86',
                msg: 'anything you want here',
            })}>></Button>
        </View>
    );
}

function Settings({ route, navigation }) {
    const { itemId } = route.params;
    const { msg } = route.params;

    navigation.setOptions({
        title: 'Settings Title',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Text>itemId: {itemId}</Text>
            <Text>msg: {msg}</Text>
        </View>
    );
}

/*
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}

        >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/