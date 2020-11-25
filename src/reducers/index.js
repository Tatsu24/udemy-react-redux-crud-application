import {
    combineReducers
} from 'redux'
import events from './events'

export default combineReducers({
    events
})

// 複数のとき
// export default combineReducers({
//     foo,
//     bar,
//     baz
// })