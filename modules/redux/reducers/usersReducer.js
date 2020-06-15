import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE 
} from '../actions/usersActions';


const initialState = {
    request_status: '',
    data: null,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, request_status: 'REQUESTING' };

        case FETCH_USERS_SUCCESS:
            return { ...state, request_status: '', data: action.payload };

        case FETCH_USERS_FAILURE:
            return { ...state, request_status: 'ERROR' };

        default:
            return state;
    }
};

export default usersReducer;