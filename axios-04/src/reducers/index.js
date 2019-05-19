import { combineReducers } from 'redux';

import usersReducer from './users.reducer';
import postsReducer from './posts.reducer';

const appReducer = combineReducers({
    user: usersReducer,
    post: postsReducer,
});

export default appReducer;