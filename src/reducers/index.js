import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import appReducer from './appReducer';

export default combineReducers({
  form,
  app: appReducer
})
