import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Button, 
    Card, 
    CardSection,
    ContainerBackground
} from '../../common';
import styles from './Styles';
const logo = require('../../images/vexrob_logo_rev.png');

class HomeScreen extends React.Component {
    render() {
        return (
            <ContainerBackground source={require('../../images/figure-1.png')}>
                <Card>
                    <View style={styles.logoContainer}>
                        <View style={styles.backgroundContainer}>
                            <Image source={logo} resizeMode="contain" style={styles.backdrop} />
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <CardSection>
                            <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Register')}>
                                <Text>Hemen Başla</Text>
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button full rounded primary style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Login')}>
                                <Text>Bir Hesabım Var</Text>
                            </Button>
                        </CardSection>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

HomeScreen.propTypes = {
    navigation: PropTypes.object
};


const mapStateToProps = ({ RegisterDataResponse }) => {
    const { questionOne, questionTwo, questionThree, questionFour } = RegisterDataResponse;
    return { questionOne, questionTwo, questionThree, questionFour };
};

export default connect(
    mapStateToProps,
    { }
)(HomeScreen);
