import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import App from './App'
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import { Provider as AlertProvider } from 'react-alert'
import './css/Main.css'
// import AlertTemplate from 'react-alert-template-basic'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const options = {
  position: 'top center',
  timeout: 5000,
  offset: '300px',
  transition: 'scale'
}

class AlertTemplate extends Component {
  render () {
    const { style, options, message, close } = this.props
 
    return (
      <div className="flash">
        {message}&emsp;&emsp;
        <button onClick={close} className="flash-button">X</button>
      </div>
    )
  }
}

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
 	<AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  </BrowserRouter>
</Provider>
,document.getElementById('root'));