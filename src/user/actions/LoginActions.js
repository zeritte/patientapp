import { Alert, AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    NAME_CHANGED,
    SURNAME_CHANGED
} from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const nameChanged = (name) => {
    return (dispatch) => {
        dispatch({
            type: NAME_CHANGED,
            payload: name
        });
    };
};

export const surnameChanged = (surname) => {
    return (dispatch) => {
        dispatch({
            type: SURNAME_CHANGED,
            payload: surname
        });
    };
};

export const signUpUser = ({ email, password, navigation, name, surname, startGrow, endGrow }) => {
  return dispatch => {

  }
}

export const loginUser = ({ email, password, navigation, startGrow, endGrow }) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER });
        if (email === '' || password === '') {
            Alert.alert('Mesaj', 'Her iki alanda Dolu olmalı!', [
                { text: 'Tamam', onPress: () => null }
            ]);
        } else {
            axios
                .post('https://vexrob.com/api/patient/login', {
                    email: email,
                    password: password
                })
                .then(function (response) {
                    AsyncStorage.setItem(
                        'token',
                        JSON.stringify(response.data.token),
                        () => {
                            setTimeout(() => {
                                startGrow();
                            }, 1000);
                            setTimeout(() => {
                                endGrow();
                                loginSuccess(
                                    dispatch,
                                    response.data,
                                    navigation
                                );
                            }, 1300);
                        }
                    );
                }.bind(this))
                .catch(function () {
                    loginFail(dispatch);
                });
        }
    };
};

const loginFail = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Kullanıcı bilgileri hatalı',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginSuccess = (dispatch, user, navigation) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    navigation.navigate('DrawerOpen');
};
