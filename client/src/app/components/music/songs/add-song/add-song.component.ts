import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

//Service
import { GetAlbumServices } from '../../../../core/services/album/get-albums.service';
import { AddSongService } from '../../../../core/services/song/add-song.service';
//Model
import { SongInputModel } from '../../../../core/models/input-models/song.model';
import { ViewModelAlbum } from '../../../../core/models/view-models/album.model';
//State
import { AppState } from '../../../../store/app-state';


@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit, OnDestroy {
  public songForm: FormGroup;
  public albums$: Observable<ViewModelAlbum[]>;
  private song: SongInputModel;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private albumService: GetAlbumServices,
    private songService: AddSongService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.initializeSongForm();
    this.albumService
      .getAlbums()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.albums$ = this.store.pipe(select(state => state.albums.all));
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public submitSongForm(): void {
    const songData = this.songForm.value;
    this.song = new SongInputModel(
      songData['title'],
      songData['author'],
      songData['album']['title']
    );

    this.songService.addNewSong(this.song).subscribe();
  }

  public initializeSongForm(): void {
    this.songForm = this.fb.group({
      title: 'cool',
      author: 'cool',
      album: ''
    });
  }

  public get title(): AbstractControl {
    return this.songForm.get('title');
  }

  public get author(): AbstractControl {
    return this.songForm.get('author');
  }

  public get album(): AbstractControl {
    return this.songForm.get('album');
  }
}
