import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


class Home extends Component {
  state = {
    posts: [ ]
  };
  componentDidMount() {
    axios.get('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
      .then(res => {
        console.log(res)
        this.setState({
          posts: res.data.data
      })
    })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.name}</span>
              </Link>
            </div>
          </div>
        );
      })
    ): (
      <div className="center">No posts yet</div>
    )
    return (
      <div className="container home">
        <h4 className="center">Events</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
