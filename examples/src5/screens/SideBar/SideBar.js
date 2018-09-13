import React from 'react';
import { AsyncStorage, Image, View, StyleSheet } from "react-native";
import { Container, Content, Card, Separator, Text, List, ListItem } from 'native-base';

const routes = ['Home', 'Chat', 'Profile', 'ProgramList'];
var styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        height: 120,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 50,
        height: 50
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
});

export default class SideBar extends React.Component {
    logout() {
        AsyncStorage.removeItem("token").then(value => {
            console.log("removeItem value", value);
            this.props.navigation.navigate('Login');
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <View style={styles.backgroundContainer}>
                            <Image source={require('../../images/bg-drawer.png')} resizeMode='cover' style={styles.backdrop} />
                        </View>
                        <View style={styles.overlay}>
                            <Image style={styles.logo} source={require('../../images/vexrob-logo.png')} />
                        </View>
                    </View>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                    <ListItem onPress={() => { this.logout() }}>
                        <Text>Logout</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
