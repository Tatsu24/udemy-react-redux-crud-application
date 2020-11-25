import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div> value: {props.value} </div>
        <Button variant="outlined" size="small" color="secondary" onClick={props.increment} > +1 </Button>
        <Button variant="outlined" size="small" color="primary" onClick={props.decrement} > -1 </Button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;