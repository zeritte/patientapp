import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from '../../common';

class SideBar extends Component {
    logout() {
        AsyncStorage.removeItem('token').then(value => {
            this.props.navigation.navigate('Login', { value });
        });
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Button onPress={() => {
                    this.logout();
                }}>
                    Logout
                </Button>
            </View>
        );
    }
}

SideBar.propTypes = {
    navigation: PropTypes.object
};

export default SideBar;