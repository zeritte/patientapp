import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import SideBar from '../SideBar/SideBar.js';
import LoginForm from '../LoginScreen/index';
import Register from '../RegisterScreen/index';

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Login: { screen: LoginForm },
        Register: { screen: Register }
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;
