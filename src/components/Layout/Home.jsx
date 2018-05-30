import React from 'react';
import '../../css/Main.css'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  
  render() {
    return (
			<div className="container">
		    <div className="row mt40">
		    	{/*<div className="col-md-2 col-sm-12 col-lg-2"></div>*/}
			    <div className="col-md-12 col-sm-12 col-lg-12">
			    	<h1 className="header-text">Publish your passions, your way</h1>
						<h3 className="header-text">Create a unique and beautiful blog.</h3>
						<div className="form-group text-center">
			        <Link to='/SignUp' className="btn singup-button">Create your blog</Link>
			      </div>
			    </div>
		    </div>
		    <div className="row">
		    	<div className="col-md-3 col-sm-12 col-lg-3"></div>
			    <div className="col-md-4 col-sm-12 col-lg-4">
			    	<img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="image"/>
			    </div>
		    </div>
		  </div>      
    )
  }
}

export default Home;