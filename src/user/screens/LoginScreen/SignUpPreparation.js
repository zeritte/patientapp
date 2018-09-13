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
import styles from './Styles';

class SignUpPrep extends Component {
    constructor(props) {
        super(props);
    }

    emailSignUp() {
        const { navigation } = this.props;
        navigation.navigate('SignUp');
    }
    facebookSignUp(){
        // do nothing for now
    }

    render() {
        const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-8.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30, marginBottom: 40 }} onPress={() => navigation.navigate('QuestionSix')} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>Egzersiz Programına
                            Son Adım!</Text>
                    </CardSection>
                    <View style={{ marginTop: 320 }}>
                      <CardSection>
                          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.emailSignUp()}>
                              <Text>EPOSTA İLE KAYDOL</Text>
                          </Button>
                      </CardSection>
                      <CardSection>
                          <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.facebookSignUp()} styleButton={{ backgroundColor: '#3B5998', borderColor: '#3B5998',}} styleText={{ color: 'white' }}>
                              <Text>FACEBOOK İLE KAYDOL</Text>
                          </Button>
                      </CardSection>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

SignUpPrep.navigationOptions = {
    header: null
};

SignUpPrep.propTypes = {
    navigation: PropTypes.object,
    questionTwoChanged: PropTypes.func
};

export default (SignUpPrep);
