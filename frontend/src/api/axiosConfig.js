import axios from 'axios';

const api = axios.create({
    baseURL: 'https://victory-backend.vercel.app/',
    withCredentials: true, // Include cookies in requests
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;