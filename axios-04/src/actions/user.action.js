import { getUsers as get, getUserById as getById } from '../services/users';

export const GET_USERS = 'GET_USERS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const getUsers = () => dispatch => {
    get()
    .then(response => {
        dispatch({
            type: GET_USERS,
            payload: response.data
        });
    })
    .catch(error => {
        console.log(error);
    })
};

export const getUserById = () => dispatch => {
    getById('asdas')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.dir(error);
    });
};

export const setActiveUser = index => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: index
    });
};
