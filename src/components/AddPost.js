import React, { Component } from 'react';

export class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      title: '',
      body: '',
    });

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="body"
          placeholder="Add body"
          value={this.state.body}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
        />
      </form>
    );
  }
}


export default AddPost;
