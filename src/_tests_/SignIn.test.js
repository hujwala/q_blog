import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import SignIn, { renderTextInput } from '../components/SignIn/SignIn';
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

describe("SignIn", () => {
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
        <SignIn {...props}/>
      </Provider>
    )
  })
  it('should have form', () => {
    // expect(subject.find('form').hasClass('login')).toBe(true)
    expect(subject.find('Field').length).toEqual(2);
  })

  it('calls on submit', ()=> {
        const form = subject.find('form');
        subject.find('#email').simulate('change', {target: {name: 'email', value: 'sunil.kr1024@gmail.com'}, preventDefault: () => {}})
        subject.find('#password').simulate('change', {target: {name: 'password', value: 'qwinix123!'}, preventDefault: () => {}})
        form.simulate('submit');
        expect(toJson(form)).toMatchSnapshot();
    });
});