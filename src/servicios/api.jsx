import axios from 'axios';

const API_URL = "https://gg-guides-backend.onrender.com/api";

//const API_URL = "http://localhost:5000/api";

const api = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

api.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default api;

