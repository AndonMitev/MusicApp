import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//Service
import { AddAlbumService } from '../../../../core/services/album/add-album.service';
import { GetAllCategoriesService } from '../../../../core/services/categories/get-all.service';
//State
import { AppState } from '../../../../store/app-state';
//Model
import { AlbumInputModel } from '../../../../core/models/input-models/album.model';
import { CategoryInputModel } from '../../../../core/models/input-models/category.model';

@Component({
  selector: 'album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit, OnDestroy {
  public albumForm: FormGroup;
  public categories$: Observable<CategoryInputModel[]>;
  private albumModel: AlbumInputModel;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private albumServices: AddAlbumService,
    private categoryServices: GetAllCategoriesService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.initializeAlbumForm();
    this.categoryServices
      .getAllCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        () =>
          (this.categories$ = this.store.pipe(
            select((state: AppState) => state.categories.all)
          ))
      );
  }

  public initializeAlbumForm(): void {
    this.albumForm = this.fb.group({
      title: 'Recovery',
      year: 2015,
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Recovery_Album_Cover.jpg/220px-Recovery_Album_Cover.jpg',
      categories: 'Jazz',
      author: 'Eminem'
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public submitAlbumForm(): void {
    const albumData = this.albumForm.value;
    this.albumModel = new AlbumInputModel(
      albumData['title'],
      albumData['image'],
      +albumData['year'],
      albumData['author'],
      albumData['categories']
    );

    this.albumServices
      .addNewAlbum(this.albumModel)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
