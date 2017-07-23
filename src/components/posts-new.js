import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class PostsNew extends Component {

// The field argument is an object which contains some event handlers that need to be wired to the JSX
// The Field component is responsible for any changes on this input
// field.input is an object which contains event handlers i.e. onChange, onBlur, onFocus

  renderField(field) {
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <input
          className="form-control"
          type="text"
          { ...field.input }
        />
      </div>
    );
  }

  // Any prop set in Field is accessible on the field obj passed to renderField

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'                            // The form name has to be unique
})(PostsNew);