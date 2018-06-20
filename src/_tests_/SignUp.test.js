import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import SignUp, { renderTextInput } from '../components/SignUp/SignUp';
import ReduxThunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import toJson from 'enzyme-to-json';
// import chai, { expect } from 'chai'
// import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import reducers from '../reducers';
import * as actions from '../actions';
import * as types from '../actions/type';
import Adapter from 'enzyme-adapter-react-16';
import { reducer as formReducer, SubmissionError } from 'redux-form';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() });

describe("SignUp", () => {
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
        <SignUp {...props}/>
      </Provider>
    )
  })
  it('should have form', () => {
    expect(subject.find('form').hasClass('signup')).toBe(true)
    expect(subject.find('Field').length).toEqual(4);
  })

  it('calls on submit', ()=> {
        const form = subject.find('form');
        subject.find('#username').simulate('change', {target: {name: 'name', value: 'kuldeep'}, preventDefault: () => {}})
        subject.find('#email').simulate('change', {target: {name: 'email', value: 'sunil.kr1024@gmail.com'}, preventDefault: () => {}})
        subject.find('#password').simulate('change', {target: {name: 'password', value: 'qwinix123!'}, preventDefault: () => {}})
        subject.find('#confirmPassword').simulate('change', {target: {name: 'confirmPassword', value: 'qwinix123!'}, preventDefault: () => {}})
        form.simulate('submit');
        expect(toJson(form)).toMatchSnapshot();
    });
});