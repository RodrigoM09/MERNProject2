// axios is a library that allows us to make HTTP requests from the browser.
import axios from 'axios';

const url = 'http://localhost:3000/posts';

// this is the same as: export const fetchPosts = () => axios.get(url).then((res) => res.data);
export const fetchPosts = () => axios.get(url);

// this is the same as: export const createPost = (newPost) => axios.post(url, newPost).then((res) => res.data);
export const createPost = (newPost) => axios.post(url, newPost);

// this is the same as: export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost).then((res) => res.data);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// this is the same as: export const deletePost = (id) => axios.delete(`${url}/${id}`).then((res) => res.data);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// this is the same as: export const likePost = (id) => axios.patch(`${url}/${id}/likePost`).then((res) => res.data);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);