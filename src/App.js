import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello, world!</h1>
        <label htmlFor="bar"></label>
        <input type="text" onClick={() => { console.log("I'm Click!") }}></input>
      </React.Fragment>
    )
  }
}

export default App;
