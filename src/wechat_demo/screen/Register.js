import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'


class Register extends React.Component {


    render() {
        const { navigation } = this.props

        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>
                Register Page
            </Text>
            <TouchableOpacity style={{justifyContent:'center', width: 280, height: 50, backgroundColor: 'red', marginTop: 50, backgroundColor: '#F035E0',
        borderRadius: 20}}
                onPress={() => navigation.push('Result')}>
                <Text style={{color: '#fff',textAlign: 'center',fontSize: 16,fontWeight: "bold"}}>Result</Text>
            </TouchableOpacity>
        </View>
    }
}


export default function (props) {
    return <Register {...props} navigation={useNavigation()}  />
}