import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducers from './LoginReducers';
import ProgramsDataReducers from './ProgramsDataReducers';
import UserDataReducers from './UserDataReducers';

export default combineReducers({
	loginDataResponse: LoginReducers,
	programsDataResponse: ProgramsDataReducers,
	user: UserDataReducers,
	form: formReducer
});
