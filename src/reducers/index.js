import { combineReducers } from 'redux';
import api_reducer from './api_reducer/api_reducer';
import profile_reducer from './profile_reducer/profile_reducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer, 	
  api: api_reducer,
  profileDetails: profile_reducer
})