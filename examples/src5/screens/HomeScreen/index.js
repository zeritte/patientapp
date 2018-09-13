import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import MainScreenNavigator from '../ChatScreen/index.js';
import Profile from '../ProfileScreen/index.js';
import ProgramList from '../ProgramListScreen/index.js';
import SideBar from '../SideBar/SideBar.js';
import LoginForm from '../LoginScreen/index';

const HomeScreenRouter = DrawerNavigator(
    {
        Login: { screen: LoginForm },
        Home: { screen: HomeScreen },
        Chat: { screen: MainScreenNavigator },
        Profile: { screen: Profile },
        ProgramList: { screen: ProgramList }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
