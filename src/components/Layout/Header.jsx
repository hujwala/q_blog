import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link to='/' className="navbar-brand">Q Blog</Link>
        <form className="form-inline">
          {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">*/}
          <Link to='/SignUp' className="btn btn-outline-success my-2 my-sm-0">SignUp</Link>&emsp;
          <Link to='/SignIn' className="btn btn-outline-success my-2 my-sm-0"> SignIn</Link>
        </form>
      </nav>
    )
  }
}

export default Header;
