import axios from 'axios';

// Create an Axios instance
const axiosClient = axios.create({
    baseURL: 'https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/laptop', // Ensure the base URL is correct
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor (if needed)
axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor (if needed)
axiosClient.interceptors.response.use(
    (response) => {
        return response.data; // Return only the data from the response
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
