import React from 'react';
import {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Home from './Home';
import index from '../Blog/BlogIndex'
import CreateBlog from '../Blog/CreateBlog'
import PageNotFound from './PageNotFound.jsx';
import { bake_cookie, read_cookie } from "sfcookies";

const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    read_cookie("auth_token").length != 0 ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
  

class Main extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sign_up' component={SignUp} />
        <Route exact path='/sign_in' component={SignIn} />
        <Private exact path="/Blog_index" component={index} />
        <Private exact path='/create_blog'  component={CreateBlog} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    )
  }
}

export default Main;