import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import { reducer as reducerForm } from 'redux-form';

export const reducers = combineReducers({
  posts: PostsReducer,
  form: reducerForm
});