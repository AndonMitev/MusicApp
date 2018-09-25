import { Injectable } from '@angular/core';
import { Get } from '../crud/get-method';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewSongModel } from '../../models/view-models/song.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { GetAllSongsAction } from '../../../store/actions/song';

@Injectable({
  providedIn: 'root'
})
export class GetAllSongsService {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getAllSongs(): Observable<void> {
    return this.http
      .get('music/songs', 'all')
      .pipe(
        map((songs: ViewSongModel[]) =>
          this.store.dispatch(new GetAllSongsAction(songs))
        )
      );
  }
}
