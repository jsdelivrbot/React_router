import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from "../actions/index";
import { Link } from 'react-router-dom';
import {deletePost} from "../actions/index";

class PostShow extends Component {

  componentDidMount() {
    // provided by react router. Contains all the wildcard values( :id )
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, ()=> {
      this.props.history.push('/');
    })
  };

  render() {
    const { post } = this.props;

    if ( !post ) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete</button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

// second argument is own component props
// ownProps is injected from the application state reducers

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ ownProps.match.params.id ]
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);