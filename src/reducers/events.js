import {
    READ_EVENTS
} from '../actions'

const updateValue = (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return state;
        default:
            return state;
    }
}

export default updateValue