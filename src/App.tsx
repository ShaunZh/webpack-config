import React from 'react';
import './style';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import Counter from '@/pages/Counter';
import Home from '@/pages/Home';
import PostsList from './pages/Posts/PostsList';
import AddPostForm from './pages/Posts/AddPostForm';

export default function App(): React.ReactElement {

  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/postsList">PostsList</Link></li>
          <li><Link to="/addPost">addPost</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact><Home></Home></Route>
          <Route path="/counter"><Counter initCount={0}></Counter></Route>
          <Route path="/postsList"><PostsList></PostsList></Route>
          <Route path="/addPost"><AddPostForm></AddPostForm></Route>

        </Switch>
      </Router>
    </Provider>
  );
}
