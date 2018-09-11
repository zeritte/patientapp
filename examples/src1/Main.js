import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/Header.js';
import Liste from './components/Liste.js';

class Main extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText="Ana Sayfa" />
                <Liste />
            </View>
        );
    }
}

export default Main;
