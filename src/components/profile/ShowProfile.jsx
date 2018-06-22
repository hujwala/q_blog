import React from 'react';
import {Component} from 'react';
import { profileDetails } from '../../actions';
import './showProfile.css'
import { connect } from 'react-redux';

class ShowProfile extends Component {
  componentWillMount() {
    this.props.profileDetails()
  }

  render() {
    return (
  <div className = "container">
    <div className = "row ">
      <div>
        <span> Email
          <input type = "text"/>
            <button onClick={() => this.profileUpdate()}>Edit</button>
            <button>Save</button>
      </span>
        </div>
       </div>
      </div>  
      )
  }
}

const mapStateToProps = (state) => {
  const { profile_details } = state.profileDetails;
  return { profile_details };
}
export default connect(mapStateToProps, { profileDetails }) (ShowProfile);