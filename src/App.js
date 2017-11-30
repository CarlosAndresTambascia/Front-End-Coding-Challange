import React, { Component } from 'react';
import Navigation  from './views/components/navigation/co-navigation';
import Side from './views/components/side/co-side';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Side/>
      </div>
    );
  }
}

export default App;
