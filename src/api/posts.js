import { get, remove } from './api';

export const getPosts = () => get('/posts');

export function getUserPosts(userId) {
  return get(`/posts?userId=${userId}`);
}

export function getPostDetails(postId) {
  return get(`/posts/${postId}`);
}

export function addPost(post) {
  return post(`/posts`, post);
}

export function deletePost(postId) {
  return remove(`/posts/${postId}`);
}
