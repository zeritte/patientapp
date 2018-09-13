import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, Image, TouchableOpacity, View  } from 'react-native';
import {
    Button,
    Card,
    CardSection,
    ContainerBackground
} from '../../common';

class Warning extends Component {
    constructor(props) {
        super(props);
    }

    clickYes() {
        const { navigation } = this.props;
        navigation.navigate('Home');
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#2F3C66' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                     <Text style={{ fontSize: 36, color: 'white', alignItems: 'center' }}>
                       Doktorunun onayı var mı?
                     </Text>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

Warning.navigationOptions = {
    header: null
};

Warning.propTypes = {
    navigation: PropTypes.object,
    clickYes: PropTypes.func
};

export default Warning;
