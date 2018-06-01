import { combineReducers } from 'redux';
import api_reducer from './api_reducer/api_reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer, 	
  api: api_reducer,
})