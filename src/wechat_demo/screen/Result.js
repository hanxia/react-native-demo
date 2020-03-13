import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function Result({ navigation, route }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30}}>
                Result Page
            </Text>
        </View>
    );
}