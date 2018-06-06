import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import { blogDetails } from '../../actions';
import { connect } from 'react-redux';
import { blogUpdate } from '../../actions';
import '../../css/Main.css'
class Header extends React.Component {
  filterList (event) {
    if(event.target.value.toString() !== ""){
      this.props.blogUpdate(event.target.value)
    } else {
      this.props.blogDetails()
    }

  }

  render(){
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link to='/' className="navbar-brand">Q Blog</Link>
        <div>
        <input className="search" type="search" placeholder="Search" onChange={e => this.filterList(e)} />
        </div>
        <form className="form-inline">
          <Link to='/SignUp' className="btn btn-outline-success my-2 my-sm-0">SignUp</Link>&emsp;
          <Link to='/SignIn' className="btn btn-outline-success my-2 my-sm-0"> SignIn</Link>
        </form>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { details } = state.api;
  return { details };
}
export default connect(mapStateToProps, { blogDetails, blogUpdate }) (Header);
