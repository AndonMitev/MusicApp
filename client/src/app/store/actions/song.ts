import { Action } from '@ngrx/store';
import { SongInputModel } from '../../core/models/input-models/song.model';
import { ViewModelSong } from '../../core/models/view-models/song.model';

export const addNewSong = '[SONG] Add New Song';
export const getAllSongs = '[SONG] Get All Songs';

export class AddNewSongAction implements Action {
  readonly type: string = addNewSong;
  constructor(public payload: SongInputModel) {}
}

export class GetAllSongsAction implements Action {
  readonly type: string = getAllSongs;
  constructor(public payload: ViewModelSong[]) {}
}

export type Types = AddNewSongAction | GetAllSongsAction;
