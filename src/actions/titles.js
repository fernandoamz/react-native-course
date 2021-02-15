import {ADD_TITLE, DELETE_TITLE} from './types';

export const addTitle = title => {
  return {
    type: ADD_TITLE,
    payload: title,
  };
};

export const deleteTitle = id => {
  return {
    type: DELETE_TITLE,
    payload: id,
  };
};
