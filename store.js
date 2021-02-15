import {createStore, combineReducers} from 'redux';
import counter from './src/reducers/counterReducer';
import titles from './src/reducers/homeReducer';

const rootReducer = combineReducers({
  counter,
  titles,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
