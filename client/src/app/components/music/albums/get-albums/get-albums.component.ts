import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//Service
import { GetAllAlbumsService } from '../../../../core/services/album/get-albums.service';
//Model
import { ViewAlbumModel } from '../../../../core/models/view-models/album.model';
//State
import { AppState } from '../../../../store/app-state';

@Component({
  selector: 'get-albums',
  templateUrl: './get-albums.component.html',
  styleUrls: ['./get-albums.component.css']
})
export class GetAlbumsComponent implements OnInit, OnDestroy {
  public albums$: Observable<ViewAlbumModel[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private albumServices: GetAllAlbumsService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.albumServices
      .getAlbums()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () =>
          (this.albums$ = this.store.pipe(
            select((state: AppState) => state.albums.all)
          ))
      );
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
