import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import './css/SignUp.css'



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
    if (!values.userName) {
      errors.userName = 'Required'
    } else if (values.userName.length < 2) {
      errors.userName = 'Minimum be 2 characters or more'
    }
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
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
      } 
      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'password and confirmPassword does not match'
      }
    return errors
  }

class SignUp extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }

render(){
  const { fields: {userName, email, password , confirmPassword}, handleSubmit, pristine, submitting } = this.props;
    return (
    <div className="container">
    <div className="row">
    <div className="col-md-4 col-sm-4 col-lg-4">
    <img src={require("./image/blog.jpg")} alt="boohoo" className="img-responsive" className="image"/>
    </div>
    <div className="col-md-8 col-sm-8 col-lg-8">
    <form onSubmit={ handleSubmit(props => this.submit(props))} >
      <div className='title'>Sign Up </div>
      <div className="form-group">
        <Field name="userName" component={renderField} label=" UserName" {...userName} />
      </div>
      <div className="form-group">
        <Field name="email" component={renderField} label="Email" {...email} />
      </div>
      <div className="form-group">
        <Field name="password" component={renderField} label="Password" type="password" {...password}/>
      </div>
      <div className="form-group">
        <Field name="confirmPassword" component={renderField} label="ConfirmPassword" type="password" {...confirmPassword}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
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
  fields: ['userName', 'email', 'password' , 'confirmPassword'],
  validate
})(SignUp);

