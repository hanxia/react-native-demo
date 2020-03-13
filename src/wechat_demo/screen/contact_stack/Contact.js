import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, FlatList, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

class Contact extends React.Component {
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "silver",
                }}
            />
        );
    }

    // getListViewItem = (item) => {
    //     // navigation.push("DAY1")
    //     console.log(item.key)
    //     console.log(this.navigation)
    //     this.navigation.push(item.key)
    //     Alert.alert(item.key);

    // }
    render() {
        const dataValue = [
            { key: 'Demo1' },
            { key: 'Demo2' }, /*{ key: 'Demo3' }, { key: 'Demo4' },
            { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
            { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
            { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
            { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
            { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
            { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }*/
        ]
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataValue}
                    renderItem={({ item }) =>
                        <Text style={styles.item}
                            onPress={() => {
                                this.props.navigation.push(item.key)
                             }
                            } >{item.key}
                        </Text>
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }

}

export default function (props) {
    return <Contact {...props} navigation={useNavigation()} route={useRoute} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
