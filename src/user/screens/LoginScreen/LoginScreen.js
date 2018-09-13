import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Animated,
    Text,
    Easing,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Spinner } from '../../components/Spinner';
import { Button, Card, CardSection, ContainerBackground } from '../../common';
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 45;
import styles from './Styles';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this.startGrow = this.startGrow.bind(this);
        this.endGrow = this.endGrow.bind(this);
    }

    UNSEFE_componentWillMount() {
    // AsyncStorage.getItem("token").then(value => {
    //   console.log("value", value);
    //   if (value) {
    //     this.props.navigation.navigate("ProgramList");
    //   }
    // });
    }

    clickLogin() {
        const { loginUser, email, password, navigation } = this.props;
        loginUser({
            email,
            password,
            navigation,
            startGrow: this.startGrow,
            endGrow: this.endGrow
        });
        Animated.timing(this.buttonAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear
        }).start();
    }

    endGrow() {
        this.setState({ isLoading: false });
        this.buttonAnimated.setValue(0);
        this.growAnimated.setValue(0);
    }

    startGrow() {
        Animated.timing(this.growAnimated, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear
        }).start();
    }

    renderButton() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - 20, 20]
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN]
        });
        return (
            <View style={styles.containerBtn}>
                <Animated.View style={{ width: changeWidth }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.clickLogin.bind(this)}
                        activeOpacity={1}
                    >
                        {this.props.loading ? (
                            <Spinner size="small" />
                        ) : (
                            <Text style={styles.text}>GİRİŞ</Text>
                        )}
                    </TouchableOpacity>
                    <Animated.View
                        style={[styles.circle, { transform: [{ scale: changeScale }] }]}
                    />
                </Animated.View>
            </View>
        );
    }

    pressButton(navigation) {
        navigation.goBack(null);
    }

    render() {
        const { inputStyle } = styles;
        const { navigation } = this.props;
        return (
            <ContainerBackground source={require('../../images/figure-8.png')} style={{ flex: 1, backgroundColor: 'white' }}>
                <Card>
                    <CardSection>
                        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => navigation.goBack(null)} >
                            <Image source={require("../../../../assets/ios-arrow-back.png")} />
                        </TouchableOpacity>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textTitle}>MERHABA</Text>
                    </CardSection>
                    <View style={{ marginTop: 150 }}>
                    <CardSection>
                        <TextInput placeholder="E-mail" value={this.props.email} style={inputStyle} onChangeText={email => this.props.emailChanged(email)} />
                    </CardSection>
                    <CardSection>
                        <TextInput secureTextEntry splaceholder="Şifre" value={this.props.password} style={inputStyle} onChangeText={password => this.props.passwordChanged(password)} />
                    </CardSection>
                    <View>{this.renderButton()}</View>
                    </View>
                </Card>
            </ContainerBackground>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null
};

LoginScreen.propTypes = {
    navigation: PropTypes.object,
    emailChanged: PropTypes.func,
    passwordChanged: PropTypes.func,
    loginUser: PropTypes.func,
    email: PropTypes.string,
    password: PropTypes.string,
    loading: PropTypes.bool,
};

const mapStateToProps = ({ loginDataResponse }) => {
    const { email, password, loading } = loginDataResponse;
    return {
        email: email,
        password: password,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginScreen);
