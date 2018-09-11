import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
} from 'react-native';
import { Button, Card, CardSection } from '../../common';

export default class TestHomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.goBack()}>
                            <Text>Goto Login</Text>
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

TestHomeScreen.navigationOptions = {
    header: null
};

TestHomeScreen.propTypes = {
    navigation: PropTypes.object
};
