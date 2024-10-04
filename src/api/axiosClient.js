import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://668a837a2c68eaf3211d01c4.mockapi.io/laptop/laptop/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const response = error.response;

    if (response) {
      const { config, status, data } = response; // Destructure only if response exists

      const URLS = ['/auth/local/register', '/auth/local'];
      if (URLS.includes(config.url) && status === 400) {
        const errorList = data.data || [];
        const firstError = errorList.length > 0 ? errorList[0] : {};
        const messageList = firstError.messages || [];
        const firstMessage = messageList.length > 0 ? messageList[0] : {};

        // Throw an error with the first message if available
        throw new Error(firstMessage.message || "Unknown error occurred");
      }
    } else {
      // Handle cases where error.response is undefined
      console.error("Network or server error", error);
      throw new Error("Network error: Unable to reach the server");
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
