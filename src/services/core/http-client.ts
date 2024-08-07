import axios from 'axios';

// Create an Axios instance
const axiosConfig = {
    // baseURL: process.env.REACT_APP_API_URL,
    timeout: 300 * 1000, // Timeout
    //   withCredentials: true, // Check cross-site Access-Control
  }

  const httpClient = axios.create(axiosConfig)

  httpClient.interceptors.request.use(
    (config) => {
      // Add authorization token or any other custom configurations here
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  httpClient.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Backend returned status', error.response.status);
        console.error('Response data', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error', error.message);
      }
      return Promise.reject(error);
    }
  );
  
  export default httpClient;