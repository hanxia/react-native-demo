import * as React from 'react'
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Button, Image, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import PropTypes from 'prop-types';
import UserInput from './UserInput'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;



class Login extends React.Component {
    render() {
        const { navigation } = this.props
        const { route } = this.props

        return (
            <ImageBackground source={require('../../asset/image/wallpaper.jpeg')} style={{ width: '100%', height: '100%', flex: 1 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Image source={require('../../asset/image/logo.png')} style={{ width: 100, height: 100, marginTop: 100 }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 50, marginBottom: 50 }}>REACT NATIVE</Text>
                    </View>
                <View>
                    <KeyboardAvoidingView behavior="padding" style={{ alignItems: 'center' }}>
                        <UserInput source={require('../../asset/image/username.png')}
                            placeholder="Username"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false} />
                        <View style={{ height: 20 }}></View>
                        <UserInput source={require('../../asset/image/password.png')}
                            secureTextEntry={'true'}
                            placeholder="Password"
                            returnKeyType={'done'}
                            autoCapitalize={'none'}
                            autoCorrect={false} />
                    </KeyboardAvoidingView>

                    <TouchableOpacity
                        style={styles.loginScreenButton}
                        onPress={() => navigation.push('Home')}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", marginTop: 10, backgroundColor: "clear", justifyContent: "space-between", marginLeft: 20, marginRight: 20 }}>
                        <Button color="white" title='Register' onPress={() => navigation.push('Register')} />
                        <Button color="white" title="Open Modal" onPress={() => navigation.navigate('MyModal')} />
                    </View>
                </View>

            </ImageBackground>
        )
    }
}



export default function (props) {
    return <Login {...props} navigation={useNavigation()} route={useRoute} />
}

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: '#00aeef',
        borderColor: 'red',
        borderWidth: 5,
        borderRadius: 15
    },
    loginScreenButton: {
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#F035E0',
        borderRadius: 20,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold"
    }
});