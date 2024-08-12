import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiSlice} from './api/apiSlice';
import authReducer from './auth/authSlice';
import appReducer from './app/appSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  user: appReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'user'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const root = (state: object | any, action: object | any) => {
  if (action.type === 'auth/logOut') {
    return persistedReducer(state, action);

    // AsyncStorage.removeItem("persist:root");
    // return persistedReducer(undefined, action);
  } else {
    return persistedReducer(state, action);
  }
};
export const store = configureStore({
  reducer: root,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),

  // devTools: true
});
export const persistor = persistStore(store);
