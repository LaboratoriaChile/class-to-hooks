import React, { useState } from 'react';
import AddPost from './AddPost.js';

const Posts = () => {

    const [posts, setPost] = useState([
       {
         id: 0,
         title: "soy un título",
         body: "soy un body"
       },
       {
         id: 1,
         title: "MEJOR NOTICIA NO TE LA PUEDES PERDER",
         body: "EL MEJOR BODY xd"
       }
     ])

    return (
      <div>
        <AddPost posts={posts} setPost={setPost} />
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        ))}
      </div>
    );
  }


export default Posts;
