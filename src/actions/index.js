import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENTS = "CREATE_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const res = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // console.log(res)
    dispatch({
        type: READ_EVENTS,
        res
    })
}

export const postEvent = values => async dispatch => {
    const res = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    // console.log(res)
    dispatch({
        type: CREATE_EVENTS,
        res
    })
}