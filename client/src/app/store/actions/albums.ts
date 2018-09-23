import { Action } from '@ngrx/store';
import { ViewModelAlbum } from '../../core/models/view-models/album.model';

export const addNewAlbum = '[ALBUM] Add New Album';
export const getAllAlbums = '[ALBUM] Get all';

export class AddNewAlbumAction implements Action {
  readonly type: string = addNewAlbum;
  constructor(public payload: ViewModelAlbum) {}
}

export class GetAllAlbumsAction implements Action {
  readonly type: string = getAllAlbums;
  constructor(public payload: ViewModelAlbum[]) {}
}

export type Types = AddNewAlbumAction | GetAllAlbumsAction;
