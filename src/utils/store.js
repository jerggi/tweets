import { createStore, compose, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import thunk from 'redux-thunk'

import reducers from '../reducers'

export default function configureStore(initialState = {}) {
    const logger = createLogger({
        collapsed: () => true,
    })

    let middlewares = [logger, thunk]


    const finalCreateStore = compose(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = finalCreateStore(reducers, initialState)

    return store
}
