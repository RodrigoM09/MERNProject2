// axios is a library that allows us to make HTTP requests from the browser.
import axios from 'axios';

const url = 'http://localhost:3000/posts';

// this is the same as: export const fetchPosts = () => axios.get(url).then((res) => res.data);
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);