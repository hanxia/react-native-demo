import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


class Chat extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }
    render() {
        const { navigation } = this.props
        navigation.setOptions = {
            title: 'Chat',
            tabBarVisible: false
        }
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>
                    Chat Detail Page
            </Text>
            </View>
        )
    }
}

export default function (props) {
    return <Chat {...props} navigation={useNavigation()} />;
}