import { Injectable } from '@angular/core';
import { Post } from '../crud/post-method.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { InputSongModel } from '../../models/input-models/song.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { AddSongAction } from '../../../store/actions/song';

@Injectable({
  providedIn: 'root'
})
export class AddSongService {
  constructor(private http: Post, private store: Store<AppState>) {}

  public addNewSong(song: InputSongModel): Observable<void> {
    return this.http
      .post('music/songs', 'add', song)
      .pipe(
        map((song: InputSongModel) =>
          this.store.dispatch(new AddSongAction(song))
        )
      );
  }
}
