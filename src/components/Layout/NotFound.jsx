import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../image/blog.jpg';
import './PageNotFound.css'
const NotFound = () => (
<div> 
  <div className="PageNotFoundTitle">Page Not Found </div>
  <img src={PageNotFound} className="PageNotFound"/>
  <center><Link to="/">Return to Home Page</Link></center>
  </div>
);
export default NotFound;