import React from 'react';
import {Component} from 'react';
import { blogDetails } from '../../actions';
import { connect } from 'react-redux';
import { blogUpdate } from '../../actions';
import './blog_index.css'




class Blog_index extends Component {
  
  componentWillMount() {
  this.props.blogDetails()
  }
filterList (event) {
  this.props.blogUpdate(event.target.value)
  
  }

  render() {
    var data = this.props.details
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="blog_name"> Blog </h4>
          </div>
        </div>
        <div className="filter-list">
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={e => this.filterList(e, data)}/>
        </fieldset>
        </form>
      </div>
        { this.props.details.data ? 
          this.props.details.data.map(data => {
            return (
              <div className="row" key={data.id}>
              <div className="col-md-8">
              <div className="blog_title">{data.title} </div>
              <div className="blog_discription">{data.discription}</div>
              <div className="blog_content"> {data.content} </div>
              <div className="genre"> {data.genre} </div>
              <div className="blog_duration">{data.created_at} <span> * </span> {data.duration}m </div>
              </div>
              <div className="col-md-4"> 
              <img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="blog_image"/>
              </div>
        </div>
            )
          })
        : null }
      </div>
      ); 
  }
}

const mapStateToProps = (state) => {
  const { details } = state.api;
  return { details };
}
export default connect(mapStateToProps, { blogDetails, blogUpdate }) (Blog_index);
