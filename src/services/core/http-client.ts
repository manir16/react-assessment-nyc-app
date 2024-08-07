import axios from 'axios';


const axiosConfig = {
    // baseURL: process.env.REACT_APP_API_URL,
    timeout: 300 * 1000, // Timeout
    //   withCredentials: true, // Check cross-site Access-Control
  }

  const httpClient = axios.create(axiosConfig)

  httpClient.interceptors.request.use(
    (config) => {

      const apiKey = 'g0UHA26KRG1HkimGVTre8X3ZjdJZyMRs' ||  process.env.REACT_APP_NYT_API_KEY ; 

      if (config.params) {       
        if (!config.params['api-key']) {
          config.params['api-key'] = apiKey;
        }
      } else {        
        config.params = { 'api-key': apiKey };
      }
  
      return config;
    },
    (error) => {
    
      return Promise.reject(error);
    }
  );
  
  httpClient.interceptors.response.use(
    (response) => {    
      return response;
    },
    (error) => {
     
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