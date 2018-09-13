import React, { Component } from 'react';
// import Expo from "expo";
import HomeScreen from './HomeScreen/index.js';

export default class AwesomeApp extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
	
    UNSAFE_componentWillMount() {
        this.setState({ isReady: true });
    }
	
    render() {
        return <HomeScreen />;
    }
}
