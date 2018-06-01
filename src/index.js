import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import App from './App'
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
,document.getElementById('root'));