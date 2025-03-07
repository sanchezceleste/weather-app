import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Your Node.js API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;