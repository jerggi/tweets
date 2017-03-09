import * as c from '../actions/constants'
import * as Options from '../utils/constants'

const initialState = {
    tweets: [],
    sortOption: Options.CREATED_AT,
    orderOption: Options.ASCENDING,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.GET_TWEETS:
            return {
                ...state,
                tweets: action.payload.tweets,
            };
        case c.SORT_TWEETS_BY_LIKES:
            return {
                ...state,
                sortOption : action.payload.sortOption,
                orderOption: action.payload.orderOption,
                tweets: [
                    ...state.tweets.sort((t1, t2) => {
                        return  (t1[action.payload.sortOption] - t2[action.payload.sortOption]) * (action.payload.orderOption === Options.ASCENDING ? 1 : -1)
                    })
                ]
            }
        case c.SORT_TWEETS_BY_DATE:
            return {
                ...state,
                sortOption : action.payload.sortOption,
                orderOption: action.payload.orderOption,
                tweets: [
                    ...state.tweets.sort((t1, t2) => {
                        let time1 = Date.parse(t1[action.payload.sortOption])
                        let time2 = Date.parse(t2[action.payload.sortOption])

                        return  (time2 - time1) * (action.payload.orderOption === Options.ASCENDING ? 1 : -1)
                    })
                ]
            }
        default:
            return state
    }
};

export default appReducer
