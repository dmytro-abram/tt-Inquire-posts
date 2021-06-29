import React, { useState } from 'react';
import './PostAdd.scss';


export const PostAdd = ({ addPost }) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const submitHandler = (event) => {
    event.preventDefault();

    addPost({
      title,
      body,
    })
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setBody('');
  }

  return (
    <form
      className='PostAdd'
      onSubmit={submitHandler}
    >
      <input
        className='PostAdd__input'
        placeholder='Enter post title'
        value={title}
        onChange={event => {
          setTitle(event.target.value)
        }} 
      >
      </input>
      <textarea
        className='PostAdd__input'
        placeholder='Enter post body'
        value = {body}
        onChange={event => {
          setBody(event.target.value)
        }} 
        rows='15'
      >
       </textarea>

      <button
        className='button PostAdd__button'
        type='submit'
      >
        Confirm
      </button>
    </form>
  )
};

