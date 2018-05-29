import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import SignUp from './components/SignUp/SignUp';

const rootReducer = combineReducers({
    form: formReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
 <SignUp />
</Provider>
,document.getElementById('root'));