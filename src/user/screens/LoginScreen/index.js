import LoginScreen from './LoginScreen';
import TestHome from './TestHome';
import { StackNavigator } from 'react-navigation';

export default (StackNavigator({
    Login: { screen: LoginScreen },
    TestHome: { screen: TestHome }
}));
