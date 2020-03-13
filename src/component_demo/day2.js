import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

class DAY2 extends Component {
    foo() {
        fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json())
        .then(responseJson => {
            //console.log(responseJson.movies)
            Alert.alert(JSON.stringify(responseJson.movies))
        })
    }

    doo = () => {
        Alert.alert('123')
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
                <Button title='MovieData' onPress={this.foo}
                // onPress={() => Alert.alert('Simple Button pressed')} 
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginBottom: 16,
        marginHorizontal: 16,
        backgroundColor: 'grey'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default DAY2