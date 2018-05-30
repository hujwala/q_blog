import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <nav class="navbar navbar-light bg-light justify-content-between">
        <Link to='/' class="navbar-brand">Q Blog</Link>
        <form class="form-inline">
          {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">*/}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> <Link to='/SignUp'>SignUp</Link></button>&emsp;
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/SignIn'> SignIn</Link></button>
        </form>
      </nav>
    )
  }
}

export default Header;
