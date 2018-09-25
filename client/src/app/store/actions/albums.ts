import { Action } from '@ngrx/store';
import { ViewAlbumModel } from '../../core/models/view-models/album.model';

export const addNewAlbum = '[ALBUM] Add New Album';
export const getAllAlbums = '[ALBUM] Get All Albums';

export class AddNewAlbumAction implements Action {
  readonly type: string = addNewAlbum;
  constructor(public payload: ViewAlbumModel) {}
}

export class GetAllAlbumsAction implements Action {
  readonly type: string = getAllAlbums;
  constructor(public payload: ViewAlbumModel[]) {}
}

export type Types = AddNewAlbumAction | GetAllAlbumsAction;
