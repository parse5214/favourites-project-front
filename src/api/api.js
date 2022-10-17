import axios from 'axios';

const localUrl = 'http://localhost:5000/requests';

const getPosts = (localUrl) => axios.get(localUrl);
const createPost = (localUrl, newPost) => axios.post(localUrl, newPost);