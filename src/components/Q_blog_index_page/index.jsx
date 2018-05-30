import React from 'react';
import {Component} from 'react';


class index extends Component {
  render() {
    return(
      <div class="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="blog_name"> Blog </h4>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6">
            <div className="blog_title"> As an Alcoholic, Your Company “Perks” are Killing Me </div>
            <div className="blog_discription"> Dispatches from unhappy hour</div>
            <div className="blog_content"> Content </div>
            <div className="blog_duration">May 31 <span> * </span> 5 m </div>
            </div>
            <div className="col-md-6"> 
            <img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="blog_image"/>
            </div>
        </div>
      </div>
      ) 
  }
}

export default index;