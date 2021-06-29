import { get, remove, save, patch } from './api';

export const getPosts = () => get('/posts');

export function getUserPosts(userId) {
  return get(`/posts?userId=${userId}`);
}

export function getPostDetails(postId) {
  return get(`/posts/${postId}`);
}

export function createPost(post) {
  return save(`/posts`, {
    title: post.title,
    body: post.body
  });
}

export function update(post) {
  return patch(`/posts/${post.id}`, {
    userId: post.userId,
    title: post.title,
    body: post.body
  });
}


export function deletePost(postId) {
  return remove(`/posts/${postId}`);
}
