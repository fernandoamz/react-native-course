import {INCREMENT_COUNT, DECREMENT_COUNT} from './types';

export const incrementCount = counter => {
  return {
    type: INCREMENT_COUNT,
    payload: counter,
  };
};

export const decrementCount = counter => {
  return {
    type: DECREMENT_COUNT,
    payload: counter,
  };
};
