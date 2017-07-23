import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from "./reducers";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './components/posts-index';
import PostsNew from './components/posts-new';
import PostShow from './components/posts-show';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// posts/:id goes second because the new will be accepted by the :id wildcard

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew }/>
          <Route path="/posts/:id" component={ PostShow }/>
          <Route path="/" component={ PostsIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
