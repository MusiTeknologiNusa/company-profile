import axios from '../index';

export const getUsers = (page, 
                        successCallback = (response) => {}, 
                        errorCallback = (error) => {}) => {
    
    return axios.get(`/api/users?page=${page}`, { baseURL: 'https://reqres.in' })
        .then(response => {
            successCallback(response);
        })
        .catch(error => {
            errorCallback(error);
        });
};