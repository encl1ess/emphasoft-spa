import axios from 'axios';
export const API_URL = 'https://test-assignment.emphasoft.com/api/v1'

const api = axios.create({
    baseURL: API_URL,
})

api.interceptors.request.use(config => {
    if(localStorage.getItem('token')) {
        config.headers.Authorization = `Token ${localStorage.getItem('token')}`
    }
    return config;
})


export default api;