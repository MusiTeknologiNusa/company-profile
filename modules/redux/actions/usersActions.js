import { getUsers } from '~/services/users/getUsers';

export const fetchUsers = page => {
    return dispatch => {
        dispatch(fetchUsersRequest());
        setTimeout(() => {
            getUsers(page, 
                response => {
                    dispatch(fetchUsersSuccess(response.data));
                },
                error => {
                    dispatch(fetchUsersFailure(error));
                });
        }, 1000);
    };
};



const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';