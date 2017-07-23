import React, { Component } from 'react';
import { fetchPosts } from "../actions/index";
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  componentDidMount() {                     // When component renders, the list of posts is empty
    this.props.fetchPosts();                // componentDidMount is called by react after the component is rendered one
                                            // time in the DOM
  }                                         // Exact name

  render() {
    // _.map creates an array from object, used for the component to render it
    const posts = _.map(this.props.posts, (post) => {
      return (
        <li
          key={ post.id }
          className="list-group-item">
          <Link to={`/posts/${post.id}`}>{ post.title }</Link>
        </li>
      );
    });

    return (
      <div>
        <h3> Your list of posts</h3>
        <Link className="btn btn-primary" to="/posts/new">New post</Link>
        <ul className="list-group">
          { posts }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);