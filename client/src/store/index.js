import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import authReducer from './auth/reducers'
import modalReducer from './modal/reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer
})
 

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = applyMiddleware(thunk, logger);

let store = createStore(persistedReducer, middleware)
let persistor = persistStore(store)

export {store, persistor}