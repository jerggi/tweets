import * as c from '../actions/constants'

const initialState = {
    tweets: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.GET_TWEETS:
            return {
                ...state,
                tweets: action.payload.tweets,
            };
        default:
            return state
    }
};

export default appReducer
