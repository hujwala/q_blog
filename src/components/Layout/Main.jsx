import React from 'react';
import {Component} from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/SignUp' component={SignUp}/>
        <Route exact path='/SignIn' component={SignIn}/>
      </Switch>
    )
  }
}

export default Main;