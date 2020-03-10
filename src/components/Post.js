import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.post_id;
    if (id == 22) {
      id = 21;
    }
    axios.get('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
      .then(res => {
        this.setState({
          post: res.data.data[id - 12]
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h2 className="center">
          {this.state.post.name}
        </h2>
        <img src={this.state.post.cover_pic} />
        <p>{this.state.post.details}</p>
        <p className="id">Email: {this.state.post.email}</p>
      </div>
    ): (
      <div className="center">Loading post...</div>
    )
      
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

export default Post