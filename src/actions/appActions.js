import * as c from './constants'
import * as Options from '../utils/constants'
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

export const sortTweets = (sortOption, orderOption) => dispatch => {
    if (sortOption === Options.CREATED_AT) {
        dispatch({
            type: c.SORT_TWEETS_BY_DATE,
            payload: { sortOption, orderOption },
        })
    } else {
        dispatch({
            type: c.SORT_TWEETS_BY_LIKES,
            payload: { sortOption, orderOption },
        })
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
