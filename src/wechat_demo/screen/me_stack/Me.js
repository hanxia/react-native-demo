import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Me extends React.Component {
    render() {
        const { navigation } = this.props
        navigation.setOptions = {
            title: 'Me',
        }

        return (
            <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{fontSize:30}}>
                    Me Page
                </Text>
                <Button style={styles.logoutButton} title='Logout' onPress={()=>navigation.popToTop()}> 

                </Button>
            </View>
        )
    }
}

export default function (props) {
    return <Me {...props} navigation={useNavigation()} />;
}

const styles = StyleSheet.create({
    logoutButton: {
        position:'absolute',
        bottom: 200
    }
  });





