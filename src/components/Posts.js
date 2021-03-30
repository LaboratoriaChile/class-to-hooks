import React, { Component } from 'react';
import AddPost from './AddPost.js';

export class Posts extends Component {
  constructor(props) {
   super(props);
   this.state = {
     posts: [
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
     ]
   };
  }

  addPost = (post) => {
    let oldPosts = this.state.posts;
    let newPosts = oldPosts;
    newPosts.push(post);
    newPosts = newPosts.reverse();

    this.setState({
      posts: newPosts
    });

  }


  render() {
    return (
      <div>
        <AddPost addPost={this.addPost} />
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        ))}
      </div>
    );
  }
}


export default Posts;
