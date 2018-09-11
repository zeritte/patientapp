import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    USER_DATA_SUCCESS
} from './types';

export const userData = () => {
    return (dispatch) => {
	    AsyncStorage.getItem("patient").then((value) => {
	    	if(!value) {
				let error = new Error('patient');
	    		throw error;
		    }
		    let patient = JSON.parse(value);
		    dispatch({ type: USER_DATA_SUCCESS, payload: patient });
	    }).catch(() => {
		    AsyncStorage.getItem("token").then((value) => {
			    axios.post('https://vexrob.com/api/patient/account/get', {
				    token: JSON.parse(value)
			    }).then(function (response) {
				    AsyncStorage.setItem("patient", JSON.stringify(response.data.patient), () => {
					    // ...
				    });
				    dispatch({ type: USER_DATA_SUCCESS, payload: response.data.patient });
			    }.bind(this)).catch(function (error) {
				    // console.log(error);
			    });
		    });
	    });
    };
};