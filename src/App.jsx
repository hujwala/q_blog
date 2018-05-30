import React from 'react';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />
        {/*<Footer />*/}
      </div>
      
    )
  }
}

export default App;