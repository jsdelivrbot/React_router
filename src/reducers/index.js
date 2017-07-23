import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';

export const reducers = combineReducers({
  posts: PostsReducer
});