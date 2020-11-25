import {
    combineReducers
} from 'redux'
import count from './count'

export default combineReducers({
    count
})
// 複数のとき
// export default combineReducers({
//     foo,
//     bar,
//     baz
// })