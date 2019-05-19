import { combineReducers } from 'redux';

import usersReducer from './users.reducer';

const appReducer = combineReducers({
    user: usersReducer,
});

export default appReducer;