import { categoriesReducer } from './reducers/categories';
import { albumReducer } from './reducers/albums';

export const appReducers = {
  categories: categoriesReducer,
  albums: albumReducer
};
