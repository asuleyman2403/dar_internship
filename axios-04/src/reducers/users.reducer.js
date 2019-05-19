import { GET_USERS, SET_CURRENT_USER } from '../actions/user.action';

const initialState = {};

export default function(state = initialState, action){

    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: state.users[action.payload]
            };
        default:
            return state;
    }

}