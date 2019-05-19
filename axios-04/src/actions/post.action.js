import { getUserPosts, deletePost } from '../services/posts';

export const GET_USER_POSTS = 'GET_USER_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const fetchUserPosts = userId => dispatch => {
    getUserPosts(userId)
    .then(response => {
        dispatch({
            type: GET_USER_POSTS,
            payload: response.data
        });
    })
    .catch(error => {
        
    })
};

export const deleteUserPost = (postId, userId) => dispatch => {
    deletePost(postId)
    .then( r => {
        getUserPosts(userId)
            .then(response => {
                dispatch({
                    type: DELETE_POST,
                    payload: response.data
                });
            })
    })
};

export const editUserPost = (posdtId, userId) => dispath => {

};
