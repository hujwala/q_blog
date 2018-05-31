import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonDropdown from '../DropdownButton'
// import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

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
    if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length < 2) {
        errors.password = 'Minimum be 2 characters or more'
      }
    return errors
  }

class CreateBlog extends Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }


render(){
  let { fields: {title, description, content, genreId, image, readingDuration}, handleSubmit, pristine, submitting } = this.props;
    return (
    <div className="container">
    <div className="row mt80">
    <div className="col-md-12 col-sm-12 col-lg-12">
    <form onSubmit={ handleSubmit(props => this.submit(props))} >
      <div className='title'>Create Blog </div>
      <div className="form-group">
        <Field name="title" component={renderField} label="Title" {...title} className="form-control"/>
      </div>
      <div className="form-group">
        <Field name="description" component={renderField} label="Description" {...description} className="form-control"/>
      </div>
      <div className="form-group">
        <div className="btn-group">
          <ButtonDropdown/>
          {/*
          <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select genre
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">Something else here</button>
          </div>*/}    
        </div>
      </div>
      <div className="form-group">
      <div className='lable'>Content</div>
        <textarea name="content" label="Content" {...content} className="form-control"/>
      </div>
      <div className="form-group">
        <Field name="readingDuration" component={renderField} label="Reading duration" {...readingDuration} className="form-control"/>
      </div>
      <div className="form-group text-center">
        <button type="submit" className="btn singin-button">Create Blog</button>
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
})(CreateBlog);
