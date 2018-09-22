import { Action } from '@ngrx/store';
import { AlbumInputModel } from '../../core/models/input-models/album.model';

export const addNewAlbum = '[ALBUM] Add New Album';
export const getAllAlbums = '[ALBUM] Get all';

export class AddNewAlbumAction implements Action {
  readonly type: string = addNewAlbum;
  constructor(public payload: AlbumInputModel) {}
}

export class GetAllAlbumsAction implements Action {
  readonly type: string = getAllAlbums;
  constructor(public payload: AlbumInputModel[]) {}
}

export type Types = AddNewAlbumAction | GetAllAlbumsAction;
