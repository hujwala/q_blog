import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../image/blog.jpg';
import './PageNotFound.css'
const PageNotFound = () => (
<div> 
  <div className="PageNotFoundTitle">Page Not Found </div>
  <img src={PageNotFoundImage} className="PageNotFound"/>
  <center><Link to="/">Return to Home Page</Link></center>
  </div>
);
export default PageNotFound;