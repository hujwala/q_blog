import React from 'react';
import Header from './components/common/Header';
import Main from './components/common/Main';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Main />
        {/*<Footer />*/}
      </div>
      
    )
  }
}

export default App;