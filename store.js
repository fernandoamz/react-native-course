import {createStore, combineReducers} from 'redux';
import counter from './src/reducers/counterReducer';

const rootReducer = combineReducers({
  counter,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
