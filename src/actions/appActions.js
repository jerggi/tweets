import * as c from './constants'
import * as Options from '../utils/constants'
import * as Api from '../api/appRequests'

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

export const registerFilter = (filter) => ({
    type: c.REGISTER_FILTER,
    payload: filter
})

export const resetFilters = () => dispatch => {
    dispatch({
        type: c.RESET_FILTERS
    })
}
