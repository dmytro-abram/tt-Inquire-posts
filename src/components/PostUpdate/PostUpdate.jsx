import React, { useState, useEffect } from 'react';
import './PostUpdate.scss';
import { getPostDetails } from '../../api/posts';
import { Loader } from '../Loader';

export const PostUpdate = ({ match }) => {

  const [selectedPost, setSelectedPost] = useState(null);
  

  useEffect(() => {
    getPostDetails(+match.params.postId)
      .then(result => setSelectedPost(result));
  }, []);


  return (
    <>
      {selectedPost ? (
        <div className='PostUpdate'>
          <input
            className='PostUpdate__input'
            placeholder='Enter post title'
            value = {selectedPost.title}
          >
          </input>
          <textarea
            className='PostUpdate__input'
            placeholder='Enter post body'
            value = {selectedPost.body}
            rows='15'
          >
          </textarea>

          <button
            className='button PostUpdate__button'
            type='button'

          >
            Confirm
          </button>

          <button
            className='button PostUpdate__button'
            type='button'

          >
            Cancle
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
};
