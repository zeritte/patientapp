import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
// import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import Button from './ortak/Button';
import Liste from "./components/ProgramsList";

class Main extends Component {
	state = { loggedIn: null, token: null };
	componentWillMount() {
		if (this.state.token) {
			this.setState({ loggedIn: true });
		} else {
			this.setState({ loggedIn: false });
		}
	}
 
	loginSucces(data) {
		console.log('başarılı');
		this.setState({loggedIn: true, token: data.token});
	}
	
	loginFail() {
		console.log('Hatalı');
		this.setState({loggedIn: false, token: null});
		Alert.alert(
			'Mesaj',
			'Kullanıcı adı yada şifreniz hatalı!.',
			[{text:'Tamam', onPress:() => null}]
		)
	}
	
	clickLogout() {
		this.setState({loggedIn: false, token: null});
		axios.post('http://185.184.208.8/api/patient/logout', {
			token : this.state.token
		}).then(function (response) {
			console.log(response);
		}).catch(function (error) {
			console.log(response);
		});
	}
	
	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
                    <View>
                      <CardSection>
                        <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
                      </CardSection>
                      <CardSection>
                        <Liste token={this.state.token}/>
                      </CardSection>
                    </View>
				);
			case false:
				return (
                    <LoginForm loginFail={this.loginFail.bind(this)} loginSucces={this.loginSucces.bind(this)}  />
				);
			default:
				return (
                    <View>
                      <Spinner size="large" />
                    </View>
				);
			
		}
	}
	
	
	render() {
		return (
            <View>
              <Header headerText="Giriş Ekranı" />
				{this.renderContent()}
            </View>
		);
	}
}

export default Main;