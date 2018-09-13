import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
	    apiKey: "AIzaSyCLLKiatqX_1aXd0VXViJw8Hq-mE_qqkpM",
	    authDomain: "ogrencikayidi.firebaseapp.com",
	    databaseURL: "https://ogrencikayidi.firebaseio.com",
	    projectId: "ogrencikayidi",
	    storageBucket: "ogrencikayidi.appspot.com",
	    messagingSenderId: "346064553136"
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
