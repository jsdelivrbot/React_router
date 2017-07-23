import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <form>
          <Field
            name="title"
            component={ }
          />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'                            // The form name has to be unique
})(PostsNew);