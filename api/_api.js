import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.groupick.in/api/v1/'
})

export default API