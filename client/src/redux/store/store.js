import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import userSlice from '../reducers/userSlice'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


 
export const persistor = persistStore(store)
