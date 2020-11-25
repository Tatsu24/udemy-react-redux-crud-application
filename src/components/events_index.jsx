import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import Button from '@material-ui/core/Button';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>aaaaaaaaaaaaaa</div>
        {/* <div> value: {props.value} </div>
        <Button variant="outlined" size="small" color="secondary" onClick={props.increment} > +1 </Button>
        <Button variant="outlined" size="small" color="primary" onClick={props.decrement} > -1 </Button> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

// export default App;