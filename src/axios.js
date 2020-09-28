import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-41942.cloudfunctions.net/api', // The API cloud function URL
});

export default instance;

// http://localhost:5001/clone-41942/us-central1/api
// https://us-central1-clone-41942.cloudfunctions.net/api
