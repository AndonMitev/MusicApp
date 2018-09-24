import * as SongActions from '../actions/song';
import { SongState } from '../state/song';

const initialState: SongState = {
  all: []
};

function addNewSong(state, payload) {
  return {
    ...state,
    all: [...state.all, payload]
  };
}

function getAllSongs(state, payload) {
  return {
    ...state,
    all: payload
  };
}

export function songReducer(
  state: SongState = initialState,
  action: SongActions.Types
) {
  switch (action.type) {
    case SongActions.addNewSong:
      return addNewSong(state, action.payload);
    case SongActions.getAllSongs:
      return getAllSongs(state, action.payload);
    default:
      return state;
  }
}
