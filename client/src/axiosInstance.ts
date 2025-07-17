import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api', // put your backend base URL here
  // You can add headers or interceptors here as well if needed
});

export default axiosClient;
