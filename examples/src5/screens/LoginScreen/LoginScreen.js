import React, { Component } from 'react';
import { Container, Form, Item, Input, Content, Icon, Text, Button } from 'native-base';
import {
    Image,
    View,
    AsyncStorage,
    Dimensions,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Spinner } from "../../components/Spinner";
const background = require('../../images/vexrob-logo-text.png');


const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 45;

// height: viewportHeight
const { width: viewportWidth} = Dimensions.get('window');

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this);
        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this.startGrow = this.startGrow.bind(this);
        this.endGrow = this.endGrow.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem('token').then((value) => {
            console.log('value', value);
            if (value) {
                this.props.navigation.navigate('ProgramList');
            }
        });
    }

    setUser(name) {
        this.props.setUser(name);
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
            easing: Easing.linear,
        }).start();
    }

    renderButton() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [DEVICE_WIDTH - 20, 20],
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN],
        });
        return <View style={styles.containerBtn}>
            <Animated.View style={{ width: changeWidth }}>
                <TouchableOpacity style={styles.button} onPress={this.clickLogin.bind(this)} activeOpacity={1}>
                    {this.props.loading ? <Spinner size='small' /> : <Text
                        style={styles.text}
                    >
                        {' '}
                        LOGIN{' '}
                    </Text>}
                </TouchableOpacity>
                <Animated.View style={[styles.circle, { transform: [{ scale: changeScale }] }]} />
            </Animated.View>
        </View>;
    }

    renderInput({ input, label, type, meta: { touched, error, warning }, inputProps }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Icon active name={input.name === 'email' ? 'person' : 'unlock'} />
                <Input
                    value={input.value}
                    onChangeText={input.onChange}
                    placeholder={input.name === 'email' ? 'EMAIL' : 'PASSWORD'}
                    {...input}
                />
                {hasError
                    ? <Item style={{ borderColor: 'transparent' }}>
                        <Icon active style={{ color: 'red', marginTop: 5 }} name="bug" />
                        <Text style={{ fontSize: 15, color: 'red' }}>{error}</Text>
                    </Item>
                    : <Text />}
            </Item>
        );
    }

    render() {
        return <Container>
            <Content padder>
                <View style={styles.logoContainer}>
                    <View style={styles.backgroundContainer}>
                        <Image source={background} resizeMode="center" style={styles.backdrop} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>Merhaba</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text>Bu giriş uzman(doktor ve fizyoterapist) için değildir.</Text>
                </View>
                <View style={styles.bg}>
                    <Form>
                        <Item error={this.props.email ? false : true} floatingLabel>
                            <Icon active name={'person'} />
                            {/*<Label>Username</Label>*/}
                            <Input placeholder="E-mail" value={this.props.email} onChangeText={email => this.props.emailChanged(email)} />
                            <Item style={{ borderColor: 'transparent' }}>
                                <Icon active style={{ color: 'red', marginTop: 5 }} name="bug" />
                                <Text style={{ fontSize: 15, color: 'red' }}>
                                    error
                                </Text>
                            </Item>
                        </Item>
                        <Item error={this.props.password ? false : true} floatingLabel last>
                            {/*<Label>Password</Label>*/}
                            <Icon active name={'unlock'} />
                            <Input secureTextEntry placeholder="Şifre" value={this.props.password} onChangeText={password => this.props.passwordChanged(password)} />
                            <Item style={{ borderColor: 'transparent' }}>
                                <Icon active style={{ color: 'red', marginTop: 5 }} name="bug" />
                                <Text style={{ fontSize: 15, color: 'red' }}>
                                    error
                                </Text>
                            </Item>
                        </Item>
                    </Form>
                    <View>{this.renderButton()}</View>
                    <View style={{flex: 1, zIndex: -1}}>
                        <Button
                            full
                            rounded
                            primary
                            style={{ flex: 1, marginTop: 10 }}
                            onPress={() => { this.props.navigation.navigate('Information'); }}>
                            <Text>Vexrob'a Üye Değilim</Text>
                        </Button>
                    </View>
                </View>
            </Content>
        </Container>;
    }
}
LoginScreen.navigationOptions = {
    header: null
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFAFA'
    },
    containerBtn: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    shadow: {
        flex: 1,
        width: viewportWidth,
        height: 100
    },
    bg: {
        flex: 1
        // marginTop: deviceHeight / 1.75,
        // paddingTop: 20,
        // paddingLeft: 10,
        // paddingRight: 10,
        // paddingBottom: 30,
        // bottom: 0,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d63d62',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: '#d63d62',
        borderRadius: 100,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: '#d63d62'
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent'
    },
    image: {
        width: 24,
        height: 24
    },
    input: {
        marginBottom: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center'
    },
    logoContainer: {
        height: 200,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backdrop: {
        width: viewportWidth,
        flex: 1,
        flexDirection: 'column'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
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
