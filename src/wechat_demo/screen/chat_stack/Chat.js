import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = 'https://reqres.in/api/users?page=2'//`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.data : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };


    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
            leftAvatar={{ source: { uri: item.avatar } }}
            title={item.first_name}
            subtitle={item.last_name}
            bottomDivider
        />
    )

    render() {
        return (
            this.state.loading == true ? 
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Comming Soon...
            </Text>
            </View> :
            <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
            />
        )
    }
}

export default function (props) {
    return <Chat {...props} navigation={useNavigation()} />;
}

