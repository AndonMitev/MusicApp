import { categoriesReducer } from './reducers/categories';
import { albumReducer } from './reducers/albums';
import { songReducer } from './reducers/songs';

export const appReducers = {
  categories: categoriesReducer,
  albums: albumReducer,
  songs: songReducer
};
