import React, { Component } from 'react';
import { fetchPosts } from "../actions/index";
import { connect } from 'react-redux';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>Posts index</div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);