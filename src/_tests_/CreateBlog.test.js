import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import CreateBlog, { renderTextInput } from '../components/Blog/CreateBlog';
import ReduxThunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import reducers from '../reducers';
import Adapter from 'enzyme-adapter-react-16';
import { reducer as formReducer, SubmissionError } from 'redux-form';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() });

describe("CreateBlog", () => {
  let store
  let submit
  let subject
  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }))
    submit = sinon.stub().returns(Promise.resolve())
    const props = {
      submit,
    }
    
    subject = mount(
      <Provider store={store}>
        <CreateBlog {...props}/>
      </Provider>
    )
  })
  it('should have form', () => {
    expect(subject.find('form').hasClass('blogForm')).toBe(true)
    expect(subject.find('Field').length).toEqual(5);
  })

  it('calls on submit', ()=> {
        const form = subject.find('form');
        subject.find('#title').simulate('change', {target: {name: 'title', value: 'prakruthi'}, preventDefault: () => {}})
        subject.find('#description').simulate('change', {target: {name: 'description', value: 'today is sunday'}, preventDefault: () => {}})
        subject.find('#genre').simulate('change', {target: {name: 'genre', value: 'science'}, preventDefault: () => {}})
        subject.find('#content').simulate('change', {target: {name: 'content', value: 'not going to school'}, preventDefault: () => {}})
        subject.find('#image').simulate('change', {target: {name: 'content', value: 'sdkj/sdjn/ji.png'}, preventDefault: () => {}})
        subject.find('#readingDuration').simulate('change', {target: {name: 'readingDuration', value: '20m'}, preventDefault: () => {}})
        form.simulate('submit');
        expect(toJson(form)).toMatchSnapshot();
    });
});