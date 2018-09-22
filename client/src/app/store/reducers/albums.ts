import * as AlbumActions from '../actions/albums';
import { AlbumState } from '../state/album';

const initialState: AlbumState = {
  all: []
};

function addNewAlbum(state, payload) {
  return {
    ...state,
    all: [...state.all, payload]
  };
}

function getAllAlbums(state, payload) {
  return {
    ...state,
    all: payload
  };
}

export function albumReducer(
  state: AlbumState = initialState,
  action: AlbumActions.Types
) {
  switch (action.type) {
    case AlbumActions.addNewAlbum:
      return addNewAlbum(state, action.payload);
    case AlbumActions.getAllAlbums:
      return getAllAlbums(state, action.payload);
    default:
      return state;
  }
}
