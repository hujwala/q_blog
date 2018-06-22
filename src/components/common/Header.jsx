import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import { blogDetails } from '../../actions';
import { connect } from 'react-redux';
import { blogUpdate } from '../../actions';
import '../../css/Main.css'
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

class Header extends React.Component {
  filterList (event) {
    if(event.target.value.toString() !== ""){
      this.props.blogUpdate(event.target.value)
    } else {
      this.props.blogDetails()
    }

  }

  logOut(e) {
    delete_cookie("auth_token")
    this.props.history.push('/')
  }
  render()
  {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link to='/' className="navbar-brand">Q Blog</Link>
        {read_cookie("auth_token").length != 0 ? 
          <div>
            { window.location.pathname == "/blog_index" &&
              <input className="search" type="search" placeholder="Search" onChange={e => this.filterList(e)} />
            }
          <Link to='' className="btn btn-outline-success my-2 my-sm-0" onClick={this.logOut}>LogOut</Link>
          </div>
          :
          <form className="form-inline">
            <Link to='/sign_up' className="btn btn-outline-success my-2 my-sm-0">SignUp</Link>&emsp;
            <Link to='/sign_in' className="btn btn-outline-success my-2 my-sm-0"> SignIn</Link>
          </form>
        }
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { details } = state.api;
  return { details };
}
export default connect(mapStateToProps, { blogDetails, blogUpdate }) (Header);
