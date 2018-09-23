import { CategoriesState } from "./state/categories";
import { AlbumState } from "./state/album";

export interface AppState {
  categories: CategoriesState,
  albums: AlbumState
}