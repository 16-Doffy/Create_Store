import axios from "axios"
const axiosClient = axios.create({
    baseURL:'https://api.themoviedb.org/3/search/keyword?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=womenhttps://668a837a2c68eaf3211d01c4.mockapi.io/laptop/laptop',
    headers:{
        'Content-Type':'application/json',
    },   
});
axiosClient.interceptors.request.use(function(config){
    return config;
},function (error){
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function(response){
    return response.data;
},function (error){
    return Promise.reject(error);
});

export default axiosClient;