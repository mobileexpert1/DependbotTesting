import {ADD_ITEM, REMOVE_ITEM} from '../types';
let itemID = 0;

export function addItemInCart(item) {
  return {
    type: ADD_ITEM,
    id: itemID++,
    item,
  };
}
export function removeIemFromCart(id) {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
}
