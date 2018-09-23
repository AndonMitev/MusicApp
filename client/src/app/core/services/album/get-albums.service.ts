import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

//Method
import { Get } from '../crud/get-method';
//Action
import { GetAllAlbumsAction } from '../../../store/actions/albums';
//Model
import { ViewModelAlbum } from '../../models/view-models/album.model';
//State
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumServices {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getAlbums(): Observable<void> {
    return this.http
      .get('music/albums', 'all')
      .pipe(
        map((albums: ViewModelAlbum[]) =>
          this.store.dispatch(new GetAllAlbumsAction(albums))
        )
      );
  }
}
