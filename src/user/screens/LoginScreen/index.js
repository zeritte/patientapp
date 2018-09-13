import LoginScreen from './LoginScreen';
import TestHome from './TestHome';
import SignUp from './SignUp';
import { StackNavigator } from 'react-navigation';

export default (StackNavigator({
    Login: { screen: LoginScreen },
    TestHome: { screen: TestHome },
    SignUp: { screen: SignUp },
}));
