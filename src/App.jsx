import React from 'react';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {
  
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <SignUp />
      </div>
      
    )
  }
}

export default App;