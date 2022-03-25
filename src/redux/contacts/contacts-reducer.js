import { createReducer } from '@reduxjs/toolkit';
import { actions, contactsAPI } from './';
import { combineReducers } from '@reduxjs/toolkit';

const filter = createReducer('', {
  [actions.changeFitler]: (_, { payload }) => payload,
});

const contacts = combineReducers({
  [contactsAPI.reducerPath]: contactsAPI.reducer,
  filter,
});

export default contacts;
