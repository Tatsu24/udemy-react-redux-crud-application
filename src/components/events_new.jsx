import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { postEvent } from '../actions'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>新規作成</div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = ({ readEvents })

export default connect(null, null)(EventsNew)

// export default App;