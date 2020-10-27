import {ADD_ITEM, REMOVE_ITEM} from '../types';
import remove from 'lodash.remove';

const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          item: action.item,
        },
      ];

    case REMOVE_ITEM:
      const deletedNewArray = remove(state, (obj) => {
        return obj.id !== action.payload;
      });
      return deletedNewArray;

    default:
      return state;
  }
}

export default cartReducer;
