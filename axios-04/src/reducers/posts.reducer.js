import {DELETE_POST, GET_USER_POSTS} from '../actions/post.action';

const initialState = {};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_USER_POSTS:
            return {
                ...state,
                currentUserPosts: action.payload
            };
        case DELETE_POST:
            return{
                ...state,
                currentUserPosts: action.payload
            };
        default:
            return state;
    }
}
