import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddPost = ({posts, setPost}) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!event) {
      return;
    } else {
      addPost(title, body);
      setTitle('');
      setBody('');
    }
  }

  const addPost = (title, body) => {
    let id = uuidv4();
    const newPosts = [{id, title, body}, ...posts];
    setPost(newPosts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Add title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="text"
        name="body"
        placeholder="Add body"
        value={body}
        onChange={event => setBody(event.target.value)}
      />
      <input
        type="submit"
        value="submit"
      />
    </form>
  );

}


export default AddPost;
