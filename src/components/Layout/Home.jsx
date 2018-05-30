import React from 'react';
import '../../css/Main.css'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  
  render() {
    return (
			<div className="container">
		    <div className="row">
			    <div className="col-md-12 col-sm-12 col-lg-12">
			    	<h1>Publish your passions, your way</h1>
						<h3>Create a unique and beautiful blog. It’s easy and free.</h3>
						<div className="form-group">
			        <button type="submit"><Link to='/SignUp' className="btn btn-primary" >Create your blog</Link></button>
			      </div>
			    </div>
		    </div>
		    <div className="row mt80">
			    <div className="col-md-12 col-sm-12 col-lg-12">
			    	<img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="image"/>
			    </div>
		    </div>
		  </div>      
    )
  }
}

export default Home;