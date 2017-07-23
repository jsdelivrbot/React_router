import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from "../actions/index";
import { connect } from 'react-redux';

class PostsNew extends Component {

// The field argument is an object which contains some event handlers that need to be wired to the JSX
// The Field component is responsible for any changes on this input
// field.input is an object which contains event handlers i.e. onChange, onBlur, onFocus
// field.meta.error is automatically added to field with the calidate helper function
  renderField(field) {
    // further destructure properties of meta. Access properties of nested objects
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={ className }>
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">{ touched ? error : '' }</div>
      </div>
    );
  }

  onSubmitForm(values) {
    // 'this.formSubmit.bind(this))' -> this === component
    this.props.createPost(values, () => {
      // this will automatically navigate back to the root route
      this.props.history.push('/');
    });
  }

  // Any prop set in Field is accessible on the field obj passed to renderField

  render() {
    // Wiring the form to the component added a bunch of props to the component.
    // extracting the handleSubmit property from the component props
    // thre result is passed to this.onSubmitForm
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmitForm.bind(this)) }>
          <Field
            label="Title"
            name="title"
            component={ this.renderField }
          />
          <Field
            label="Category"
            name="category"
            component={ this.renderField }
          />
          <Field
            label="Content"
            name="content"
            component={ this.renderField }
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // Console.log(values) -> {title: 'assa', categories: 'dsfsdf', content: 'sdfsdf'}

  const errors = {};

  // Validate inputs from values object;

  if ( !values.title ) {
    errors.title = 'Please enter a post title';
  }

  if ( !values.category ) {
    errors.category = 'Post requires a category';
  }

  if ( !values.content ) {
    errors.content = 'Add some content to the post';
  }

  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'                            // The form name has to be unique
})(
  connect(null, { createPost })(PostsNew)
);