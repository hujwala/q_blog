import React from 'react';
import {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Home from './Home';
import index from '../Q_blog_index_page/Blog_index'
import CreateBlog from '../Q_blog_index_page/CreateBlog'
import NotFound from './NotFound.jsx';

class Main extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/SignIn' component={SignIn}/>
        <Route exact path='/Blog_index'  component={index} />
        <Route exact path='/Create_blog'  component={CreateBlog} />
        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}

export default Main;