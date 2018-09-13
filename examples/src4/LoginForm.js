import React, { Component } from 'react';
import { View, TextInput, Alert } from 'react-native';
import axios from 'axios';
import Button from './ortak/Button';
import Card from './ortak/Card';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';


class LoginForm extends Component {
	state = { email: 'gokhanefendi@gmail.com', password: '1903', loading: false };
	clickLogin() {
		this.setState({ loading: true });
		const { email, password } = this.state;
		axios.post('http://185.184.208.8/api/patient/login', {
			email : email,
			password : password
		}).then(function (response) {
			console.log(response);
			this.props.loginSucces(response.data);
		}.bind(this)).catch(function (error) {
			console.log(response);
			this.props.loginFail;
		});
		this.setState({ loading: false });
	}
	loginSucces() {
		console.log('başarılı');
		var token = this.state.token;
		this.setState({loggedIn: false, loading: false, token: token});
		this.props.setState({loggedIn: true, token: token});
	}
	
	loginFail() {
		console.log('Hatalı');
		this.setState({ loading: false, token: null });
		this.props.setState({loggedIn: false, token: null});
		Alert.alert(
			'Mesaj',
			'Kullanıcı adı yada şifreniz hatalı!.',
			[{text:'Tamam', onPress:() => null}]
		)
	}
	
	renderButton() {
		if (!this.state.loading) {
			return <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
		}
		return <Spinner size="small" />;
	}
	render() {
		const { inputStyle } = styles;
		return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder="E-mail"
                        style={inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                <CardSection>
                    <TextInput
                        secureTextEntry
                        placeholder="Şifre"
                        style={inputStyle}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                <CardSection>
					{this.renderButton()}
                </CardSection>
            </Card>
		);
	}
}

const styles = {
	
	inputStyle: {
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		flex: 1
	},
	
};

export default LoginForm;
