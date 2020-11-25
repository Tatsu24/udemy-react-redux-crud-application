import React, { Component } from 'react';
// import React from 'react';
// import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';

// class component
class App extends Component {
  render() {
    return (
      <Counter />
    )
  }
}

// const App = () => {
//   const profiles = [
//     { name: "Taro", age: 10 },
//     { name: "Hanako", age: 5 },
//     { name: "noName", },
//   ]
//   return (
//     <React.Fragment>
//       <h1>Hello, world!</h1>
//       <Hi />
//       <div>
//         {
//           profiles.map((profile, index) => {
//             return <User name={profile.name} age={profile.age} key={index} />
//           })
//         }
//       </div>
//       {/* <User name={"Taro"} age={10} />
//       <User name={"Hanako"} age={5} /> */}
//       <label htmlFor="bar"></label>
//       <input type="text" onClick={() => { console.log("I'm Click!") }}></input>
//     </React.Fragment>
//   )
// }

class Counter extends Component {
  // 初期化処理で実行されるメソッド
  constructor(props) {
    super(props)
    // console.log(this.state)
    this.state = { count: 0 }
  }
  handlePlusButton = () => {
    console.log("plus");
    this.setState({ count: this.state.count + 1 });
  }
  handleMinusButton = () => {
    console.log("minus");
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <Button variant="outlined" size="small" color="secondary" onClick={this.handlePlusButton}>+1</Button>
        <Button variant="outlined" size="small" color="primary" onClick={this.handleMinusButton}>-1</Button>
      </React.Fragment>
    )
  }
}

// const Hi = () => {
//   return <div>Hi!</div>
// }
// const User = (props) => {
//   return <div>Hi! {props.name}, and {props.age} years old!</div>
// }
// User.defaultProps = {
//   age: 1
// }
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;
