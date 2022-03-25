import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI, contacts } from './contacts';

export default configureStore({
  reducer: contacts,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});
