import { CategoriesState } from "./state/categories";
import { AlbumState } from "./state/album";
import { SongState } from "./state/song";

export interface AppState {
  categories: CategoriesState,
  albums: AlbumState,
  songs: SongState
}