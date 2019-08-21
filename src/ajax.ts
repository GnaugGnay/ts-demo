import axios from 'axios';

axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(res => {
    return res;
}, error => {
    return Promise.reject(error);
})

export default axios;