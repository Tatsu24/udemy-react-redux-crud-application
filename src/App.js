// import React, { Component } from 'react';
import React from 'react';

// class component
// class App extends Component {

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello, world!</h1>
//         <Hi />
//         <User name={"Taro"} age={10} />
//         <User name={"Hanako"} age={5} />
//         <label htmlFor="bar"></label>
//         <input type="text" onClick={() => { console.log("I'm Click!") }}></input>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {
      name: "Taro", age: 10
    },
    {
      name: "Hanako", age: 5
    },
    {
      name: "noName"
    },
  ]
  return (
    <React.Fragment>
      <h1>Hello, world!</h1>
      <Hi />
      <div>
        {
          profiles.map((profile, index)=>{
            return <User name={profile.name} age={profile.age} key={index}/>
          })
        }
      </div>
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
      <label htmlFor="bar"></label>
      <input type="text" onClick={() => { console.log("I'm Click!") }}></input>
    </React.Fragment>
  )
}

const Hi = () => {
  return <div>Hi!</div>
}
const User = (props) => {
  return <div>Hi! {props.name}, and {props.age} years old!</div>
}
User.defaultProps = {
  age: 1
}

export default App;
