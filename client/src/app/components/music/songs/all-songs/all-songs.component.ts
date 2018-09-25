import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

//Service
import { GetAllSongsService } from '../../../../core/services/song/get-all-songs.service';
//Model
import { ViewSongModel } from '../../../../core/models/view-models/song.model';
//state
import { AppState } from '../../../../store/app-state';

@Component({
  selector: 'all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.css']
})
export class AllSongsComponent implements OnInit, OnDestroy {
  public allSongs$: Observable<ViewSongModel[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private songServices: GetAllSongsService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.songServices
      .getAllSongs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () =>
          (this.allSongs$ = this.store.pipe(
            select((state: AppState) => state.songs.all)
          ))
      );
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
