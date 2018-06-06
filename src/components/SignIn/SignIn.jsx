import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import './SignIn.css'
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 2) {
        errors.password = 'Minimum be 2 characters or more'
      }
    return errors
  }

class SignIn extends Component {
  state = {
    toLogin: false
  }

  submit = (values) => {
    const user = {
      email: values.email,
      password: values.password
    };
    fetch("http://192.168.2.115:8080/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
        if (response.status === 200) {
          bake_cookie("auth_token", response.headers.get("Authorisation"));
        }
        return response.json();
      });
  }

render(){
  let { fields: {email, password}, handleSubmit, pristine, submitting } = this.props;
    return (
    <div className="container">
    <div className="row mt80">
    <div className="col-md-6 col-sm-6 col-lg-6">
    <img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="image"/>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-6">
    <form onSubmit={ handleSubmit(props => this.submit(props))} >
      <div className='title'>Sign In </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" {...email} className="form-control"/>
      </div>
      <div className="form-group">
        <Field name="password" component={renderField} label="Password" type="password" {...password} className="form-control"/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn singin-button">Submit</button>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
  }
}

export default reduxForm({
  form: 'contact',
  fields: ['email', 'password'],
  validate
})(SignIn);
