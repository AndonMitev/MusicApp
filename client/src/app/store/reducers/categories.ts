import * as CategoriesActions from '../actions/categories';
import { CategoriesState } from '../state/categories';

const initialState: CategoriesState = {
  all: [],
  details: null
};

function getAllCategories(state, payload) {
  return {
    ...state,
    all: payload.sort(
      (a, b) => b.likes.length - a.likes.length || a.createdOn - b.createdOn
    )
  };
}

function addNewCategory(state, payload) {
  return {
    ...state,
    all: [...state.all, payload]
  };
}

function getCategoryDetails(state, payload) {
  console.log(payload);
  return { ...state, details: payload };
}

export function categoriesReducer(
  state: CategoriesState = initialState,
  action: CategoriesActions.Types
) {
  switch (action.type) {
    case CategoriesActions.getAllCategories:
      return getAllCategories(state, action.payload);
    case CategoriesActions.addNewCategory:
      return addNewCategory(state, action.payload);
    case CategoriesActions.getDetailsCategory:
      return getCategoryDetails(state, action.payload);
    default:
      return state;
  }
}
