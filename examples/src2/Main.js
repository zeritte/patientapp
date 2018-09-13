import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './ortak/Header';
import LoginForm from './LoginForm';
import CardSection from './ortak/CardSection';
import Spinner from './ortak/Spinner';
import Button from './ortak/Button';

class Main extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyApUml0AptawJyPm_Tdn9_s58EocdwTC6I",
    authDomain: "kimlikdogrulama-8f081.firebaseapp.com",
    databaseURL: "https://kimlikdogrulama-8f081.firebaseio.com",
    projectId: "kimlikdogrulama-8f081",
    storageBucket: "kimlikdogrulama-8f081.appspot.com",
    messagingSenderId: "776056099551"
  });

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </CardSection>
      );
      case false:
        return (
          <LoginForm />
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
