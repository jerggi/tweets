import * as c from './constants'

//temp
import { data } from '../data'

export const getTweets = () => dispatch => {
    dispatch({
        type: c.GET_TWEETS,
        payload: {
            tweets: data
        },
    })
}
