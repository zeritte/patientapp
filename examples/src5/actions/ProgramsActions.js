import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    PROGRAMS_LIST_DATA_SUCCESS,
    PROGRAM_DETAIL_DATA_SUCCESS,
} from './types';

export const programsListData = () => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((value) => {
            axios.post('https://vexrob.com/api/patient/programs', {
                token: JSON.parse(value)
            }).then(function (response) {
                dispatch({ type: PROGRAMS_LIST_DATA_SUCCESS, payload: response.data.programs });
            }.bind(this)).catch(function (error) {
                throw error;
            });
        });
    };
};

export const programDetailData = ({ program_id, navigator }) => {
    return dispatch => {
        AsyncStorage.getItem('token').then(value => {
            axios
                .post(
                    'https://vexrob.com/api/patient/program/' + program_id,
                    {
                        token: JSON.parse(value)
                    }
                )
                .then(function (response) {
                    dispatch({
                        type: PROGRAM_DETAIL_DATA_SUCCESS,
                        payload: response.data
                    });
                    navigator.navigate(
                        'ProgramDetails',
                        {
                            program: response.data.program
                        }
                    );
                }.bind(this))
                .catch(function (error) {
                    throw error;
                });
        });
    };
};
