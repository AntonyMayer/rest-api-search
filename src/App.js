import React, { Component } from 'react';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="App__title">Search UI</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
