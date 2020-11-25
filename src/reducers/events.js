import _ from 'lodash'
import {
    READ_EVENTS
} from '../actions'

const updateValue = (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log(action.res.data)
            // console.log(_.mapKeys(action.res.data, 'id'))
            return _.mapKeys(action.res.data, 'id');
        default:
            return events;
    }
}

export default updateValue