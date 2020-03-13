import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



class Discover extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }

    render() {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>
                Discover Page
            </Text>
            </View>
    }
}

export default function (props) {
    return <Discover {...props} navigation={useNavigation()} />;
}

const styles = StyleSheet.create({
});