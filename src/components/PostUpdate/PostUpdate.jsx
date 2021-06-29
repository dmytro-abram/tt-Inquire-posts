import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostUpdate.scss';
import { getPostDetails } from '../../api/posts';
import { Loader } from '../Loader';

export const PostUpdate = ({ selectedPostId, updatePost }) => {

  const [selectedPost, setSelectedPost] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    getPostDetails(selectedPostId)
      .then(result => setSelectedPost(result));

    getPostDetails(selectedPostId)
      .then(result => setTitle(result.title));

    getPostDetails(selectedPostId)
      .then(result => setBody(result.body))
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    updatePost({
      id: selectedPostId,
      userId: selectedPost.userId,
      title,
      body,
    })

    alert('The post has been updated');
  };


  return (
    <>
      {selectedPost ? (
        <form
          className='PostUpdate'
          onSubmit={submitHandler}
        >
          <input
            className='PostUpdate__input'
            placeholder='Enter post title'
            value={title}
            onChange={event => {
              setTitle(event.target.value)
            }}
          >
          </input>
          <textarea
            className='PostUpdate__input'
            placeholder='Enter post body'
            value = {body}
            onChange={event => {
              setBody(event.target.value)
            }}
            rows='15'
          >
          </textarea>

          <button
            className='button PostUpdate__button'
            type='submit'
          >
            Confirm
          </button>

          <Link
            className='button button-link PostUpdate__button'
            type='button'
            to='/'

          >
            Cancle
          </Link>
        </form>
      ) : (
        <Loader />
      )}
    </>
  )
};
