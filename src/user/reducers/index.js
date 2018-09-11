import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import RegisterReducers from './RegisterReducers';

export default combineReducers({
    loginDataResponse: LoginReducers,
    RegisterDataResponse: RegisterReducers
});
