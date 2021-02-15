import {ADD_TITLE, DELETE_TITLE} from '../actions/types';

const initialState = {
  titles: [],
};

const titles = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        titles: [
          ...state.titles,
          {
            title: action.payload.title,
            id: action.payload.id,
          },
        ],
      };

    case DELETE_TITLE: {
      const deleteTitle = state.titles.filter(title => {
        return title.id !== action.payload;
      });

      return {
        ...state,
        titles: deleteTitle,
      };
    }
    default:
      return state;
  }
};

export default titles;
