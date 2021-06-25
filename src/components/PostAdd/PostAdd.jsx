import React, { useState } from 'react';
import './PostAdd.scss';


export const PostAdd = ( ) => {

  return (
    <div className='PostAdd'>
      <input
        className='PostAdd__input'
        placeholder='Enter post title'
        //value = {title}
      >
      </input>
      <textarea
        className='PostAdd__input'
        placeholder='Enter post body'
        //value = {body}
        rows='15'
      >
       </textarea>

      <button
        className='button PostAdd__button'
        type='button'

      >
        Confirm
      </button>

      <button
        className='button PostAdd__button'
        type='button'

      >
        Cancle
      </button>
    </div>
  )
};

