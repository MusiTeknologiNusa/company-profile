import ax from 'axios';

const axios = ax.create({ baseURL: process.env.API_URL });
axios.interceptors.request.use(request => {
    // request.headers['Authorization'] = 'token';
    return request;
});

export default axios;