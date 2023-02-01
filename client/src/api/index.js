import axios from 'axios';

const url = 'http://localhost:8000/posts';

// this is the same as: export const fetchPosts = () => axios.get(url).then((res) => res.data);
export const fetchPosts = () => axios.get(url);