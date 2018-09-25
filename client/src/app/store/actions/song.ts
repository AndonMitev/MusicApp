import { Action } from '@ngrx/store';
import { InputSongModel } from '../../core/models/input-models/song.model';
import { ViewSongModel } from '../../core/models/view-models/song.model';

export const addNewSong = '[SONG] Add New Song';
export const getAllSongs = '[SONG] Get All Songs';

export class AddSongAction implements Action {
  readonly type: string = addNewSong;
  constructor(public payload: InputSongModel) {}
}

export class GetAllSongsAction implements Action {
  readonly type: string = getAllSongs;
  constructor(public payload: ViewSongModel[]) {}
}

export type Types = AddSongAction | GetAllSongsAction;
