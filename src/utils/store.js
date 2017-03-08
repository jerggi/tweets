/* global __DEVTOOLS__ */
import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const logger = createLogger({
    collapsed: () => true,
    // diff: true,
  });

  let middlewares = [logger, thunk];


  const finalCreateStore = compose(
    applyMiddleware(...middlewares),
  )(createStore);

  const store = finalCreateStore(reducers, initialState);

  /*
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      import('../reducers').then(nextRootReducer => {
        store.replaceReducer(nextRootReducer.default);
      });
    });
  }
  */

  return store;
}
