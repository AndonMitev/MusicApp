import { Injectable } from '@angular/core';
import { Post } from '../crud/post-method.service';
import { InputAlbumModel } from '../../models/input-models/album.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { map } from 'rxjs/operators';
import { AddNewAlbumAction } from '../../../store/actions/albums';

@Injectable({
  providedIn: 'root'
})
export class AddAlbumService {
  constructor(private http: Post, private store: Store<AppState>) {}

  public addNewAlbum(album: InputAlbumModel): Observable<object> {
    return this.http.post('music/albums', 'add', album);
  }
}
