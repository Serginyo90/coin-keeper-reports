import { createStore, combineReducers } from 'redux';
import { Map } from 'immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import immutableTransform from 'redux-persist-transform-immutable'

import information from './information/reducers'
import filtration from './filter/reducers';

// doc https://github.com/rt2zz/redux-persist#nested-persists
const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ information, filtration, form: formReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    Map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return { store, persistor }
}