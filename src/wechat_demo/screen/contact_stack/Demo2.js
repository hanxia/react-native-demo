import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


class Discover extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image style={{ width: 98, height: 22 }} source={require('../../../asset/image/logo_youtube.png')}></Image>
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='search' size={25}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='account-circle' size={25}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <VideoItem>
                        
                    </VideoItem>
                </View>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem} >
                        <Icon name='home' size={25}></Icon>
                        <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem} >
                        <Icon name='whatshot' size={25}></Icon>
                        <Text style={styles.tabTitle}>Trending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem} >
                        <Icon name='subscriptions' size={25}></Icon>
                        <Text style={styles.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem} >
                        <Icon name='folder' size={25}></Icon>
                        <Text style={styles.tabTitle}>Folder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default function (props) {
    return <Discover {...props} navigation={useNavigation()} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row',
    },
    navItem: {
        marginLeft: 25,
    },
    body: {
        flex: 1
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor:'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#e5e5e5', 
        justifyContent: 'space-around',
        
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c',
    },
});

class VideoItem extends React.Component {
    
    render() {
        const fileName = "Second Trailer for Margot Robbie's Harley Quinn Movie 'Birds of Prey'"
        const imageWidth = Dimensions.get('window').width - 30
        return <View style={styles2.container}>
            <Image source={require('../../../asset/image/image1.jpg')} style={{height: 200, width: imageWidth}}></Image>
            <View style={styles2.action}>
                    <Icon name='favorite-border' size={25} style={{color:'grey'}}></Icon>
                    <Icon name='alarm' size={25} style={{paddingLeft: 10, color:'grey'}}></Icon>
                    <Icon name='all-inclusive' size={25} style={{paddingLeft: 10, color:'grey'}}></Icon>
                </View>
            <View style={styles2.descContainer}>
                <Image source={require('../../../asset/image/avatar1.jpg')} style={{height: 50, width: 50, borderRadius: 25}}></Image>
                <View style={styles2.videoDetails}>
                    <Text style={styles2.videoTitle}>{fileName}</Text>
                    <Text style={styles2.videoViewer}>5 months ago</Text>
                </View>
            </View>
        </View>
    }
}

const styles2 = StyleSheet.create({
    container: {
        padding: 15
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        // backgroundColor: 'red',
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoViewer: {
        paddingTop: 5,
        fontSize: 12,
        color: 'grey'
    },
    action: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        marginTop: 10,
    }
}); 