import * as c from './constants'
import * as Api from '../api/appRequests'

//temp
import { data } from '../data'

export const getTweets = (userName) => async dispatch => {
    try {
        const response = await Api.getTweets(userName)

        dispatch({
            type: c.GET_TWEETS,
            payload: {
                tweets: response
            },
        })
    } catch (err) {
        console.error(err)
    }
}

//temp
export const getTweetsFromData = () => dispatch => {
    dispatch({
        type: c.GET_TWEETS,
        payload: {
            tweets: data
        },
    })
}
