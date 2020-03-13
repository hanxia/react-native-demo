import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';

export default function ResetPwd({navigation, route}) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>
                Reset Pwd Page
            </Text>
        </View>
    );
}