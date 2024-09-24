import Config from 'react-native-config';
import axios from 'axios';

const restClient = axios.create({
  baseURL: 'https://v1.volleyball.api-sports.io/',
  timeout: 1000,
  headers: {
    'x-rapidapi-key': Config.RAPIDAPI_KEY,
    'x-rapidapi-host': Config.RAPIDAPI_HOST
  }
});

export default restClient;
