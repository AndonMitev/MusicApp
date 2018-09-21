import * as CategoriesActions from '../actions/categories';
import { CategoriesState } from '../state/categories';

const initialState: CategoriesState = {
  all: []
};

function getAllCategories(state, payload) {
  return {
    ...state,
    all: payload
  };
}

export function categoriesReducer(
  state: CategoriesState = initialState,
  action: CategoriesActions.Types
) {
  switch (action.type) {
    case CategoriesActions.getAllCategories:
      return getAllCategories(state, action.payload);
    default:
      return state;
  }
}
