import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'
import './SignUp.css'
import { withAlert } from 'react-alert'



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
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 2) {
      errors.name = 'Minimum be 2 characters or more'
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
    const user = {
      name: values.name,
      email: values.email,
      password: values.password
    };
    fetch("http://192.168.2.115:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(user)
    })
    .then(response => this.props.history.push('/blog_index'))
    this.props.alert.show('Signed up sucessfull!!')
         
  }

render(){
  let { fields: {name, email, password , confirmPassword}, handleSubmit, pristine, submitting } = this.props;
    return (
    <div className="container">
    <div className="row mt80">
    <div className="col-md-6 col-sm-6 col-lg-6">
    <img src={require("../../image/blog.jpg")} alt="boohoo" className="img-responsive" className="image"/>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-6">
    <form className="signup" id="signup" onSubmit={ handleSubmit(props => this.submit(props))} >
      <div className='title'>Sign Up </div>
      <div className="form-group" id="username">
        <Field  name="name" component={renderField} label=" name" {...name} />
      </div>
      <div className="form-group" id="email">
        <Field name="email" component={renderField} label="Email" {...email} />
      </div>
      <div className="form-group" id="password">
        <Field name="password" component={renderField} label="Password" type="password" {...password}/>
      </div>
      <div className="form-group" id="confirmPassword">
        <Field name="confirmPassword" component={renderField} label="ConfirmPassword" type="password" {...confirmPassword}/>
      </div>
      <div className="form-group">
        <button  type="submit" className="btn singup-button">Submit</button>&emsp;&emsp;&emsp;
        <a href="/sign_in">Already Have an account</a>
      </div>
    </form>
    </div>
    </div>
    </div>
  )
  }
}

export default withAlert(reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'password' , 'confirmPassword'],
  validate
})(SignUp));

