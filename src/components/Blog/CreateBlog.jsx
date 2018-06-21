import React from 'react';
import {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonDropdown from '../DropdownButton'
import ImageUploader from 'react-images-upload';
import { loginStatus } from '../../actions';
import { connect } from 'react-redux';
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const renderField = ({ input, label, type, select, textarea, meta: { touched, error, warning } }) => (
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
    if (!values.title) {
        errors.title = 'Required'
      }
    if (!values.description) {
        errors.description = 'Required'
      }
    if (!values.content) {
        errors.content = 'Required'
      }
    if (!values.genre) {
        errors.genre = 'Required'
      }
    if (!values.readingDuration) {
        errors.readingDuration = 'Required'
      }
    return errors
  }

  export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };

class CreateBlog extends Component {

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      images: ''
    };
  }
 
  onDrop(picture) {
    this.setState({
      pictures: picture
    });
  }

  submit = (values) => {
    var base64Img = require('base64-img');
    var images = this.state.pictures;
    var base64Images = []
    if(images!=undefined){
      images.map(function(images, index){
        base64Img.requestBase64(images.name, function(err, res, body) {
          base64Images.push(body)
        })
      })
    }
    const blog_data = {
      title: values.title,
      description: values.description,
      content: values.content,
      genre: values.genre,
      readingDuration: values.readingDuration + "m",
      blogImage: base64Images
    };
    console.log(blog_data)
    fetch("http://localhost:8080/rest/blog/2", {
      method: "POST",
      headers: {
        "Authorisation": "Token " + read_cookie("auth_token"),
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(blog_data)
    })
    .then(function(response) {
       return response.json();
    })
    .then(response =>{ 
        // if (response.statusCode === "200") {
        //   this.props.history.push('/Blog_index')
        //   this.props.alert.show(response.message)
        // }else{
        //   this.props.alert.show('Invalid email or password')
        // }
        console.log(response)
      })
  }


render(){
  let { fields: {title, description, content, genre, image, readingDuration}, handleSubmit, pristine, submitting } = this.props;
  return (
    <div className="container">
      <div className="row mt80">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <form onSubmit={ handleSubmit(props => this.submit(props))} className="blogForm">
            <div className='title'>Create Blog </div>
            <div className="form-group" id="title">
              <Field name="title" component={renderField} label="Title" {...title} className="form-control"/>
            </div>
            <div className="form-group" id="description">
              <Field name="description" component={renderField} label="Description" {...description} className="form-control"/>
            </div>
            <div className="form-group" id="genre">
              <div className="btn-group">
                <Field name="genre" component="select">
                  <option value="">Select genre</option>
                  <option value="Tech">Tech</option>
                  <option value="Entrepreneurship">Entrepreneurship</option>
                  <option value="Politics">Politics</option>
                  <option value="Design">Design</option>
                  <option value="Popular">Popular</option>
                </Field>   
              </div>
            </div>
            <div className="form-group" id="image">
              <ImageUploader
                      withIcon={true}
                      buttonType='button'
                      buttonText='Choose images'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                  />
            </div>
            <div className="form-group" id="content">
              <Field name="content" label="Content" {...content} className="form-control" component="textarea" component={renderField}/>
            </div>
            <div className="form-group" id="readingDuration">
              <Field name="readingDuration" component={renderField} type="number" label="Reading duration in munites" placeholder="in munites" {...readingDuration} className="form-control"/>
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
  fields: ['title', 'description', 'content', 'genre', 'image', 'readingDuration'],
  validate
})(CreateBlog);
