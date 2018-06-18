import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import SignIn from '../components/SignIn/SignIn';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { reducer as formReducer, SubmissionError } from 'redux-form';
import { createStore, combineReducers } from 'redux'
Enzyme.configure({ adapter: new Adapter() });

describe('SignIn Component', () => {
 
 it('should render without throwing an error', () => {
   expect(mount(<SignIn />).find('form').exists()).toBe(true)
 })
})