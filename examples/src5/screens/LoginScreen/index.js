import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import Information from './Information';
// import EditScreenTwo from "./EditScreenTwo.js";
import { StackNavigator } from 'react-navigation';
export default (DrawNav = StackNavigator({
    Login: { screen: LoginScreen },
    Information: { screen: Information },
    // EditScreenTwo: { screen: EditScreenTwo }
}));
