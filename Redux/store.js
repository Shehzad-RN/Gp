import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//* Combined Reducers
import rootReducer from "./combineReducer";
//* Auth Reducer
import auth from "./authReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, auth);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    root: rootReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

const persistor = persistStore(store);

export {store, persistor}