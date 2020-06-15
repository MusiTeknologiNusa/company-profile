import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer
});

export default rootReducer;