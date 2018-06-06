import React from 'react';
import {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Home from './Home';
import index from '../Blog/BlogIndex'
import CreateBlog from '../Blog/CreateBlog'
import PageNotFound from './PageNotFound.jsx';

class Main extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sign_up' component={SignUp}/>
        <Route exact path='/sign_in' component={SignIn}/>
        <Route exact path='/blog_index'  component={index} />
        <Route exact path='/create_blog'  component={CreateBlog} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    )
  }
}

export default Main;