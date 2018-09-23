import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//Service
import { AddAlbumService } from '../../../../core/services/album/add-album.service';
import { GetCategoryByTitleService } from '../../../../core/services/categories/get-category-title.service';
import { EditCategoryService } from '../../../../core/services/categories/edit-category.service';
//State
import { AppState } from '../../../../store/app-state';
//Model
import { AlbumInputModel } from '../../../../core/models/input-models/album.model';

@Component({
  selector: 'album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.css']
})
export class AlbumAddComponent implements OnInit, OnDestroy {
  public albumForm: FormGroup;
  public categories = ['Jazz', 'HIP-HOP'];
  private albumModel: AlbumInputModel;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private categoryServices: GetCategoryByTitleService,
    private saveCategory: EditCategoryService,
    private albumService: AddAlbumService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.initializeAlbumForm();
  }

  public initializeAlbumForm(): void {
    this.albumForm = this.fb.group({
      title: 'awa',
      year: 1950,
      image: 'awa',
      category: 'Jazz',
      author: 'awa'
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
      albumData['category']
    );

    this.categoryServices
      .getCategoryByTitle(albumData['category'])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.store
          .pipe(
            select((state: AppState) => state.categories.details),
            takeUntil(this.unsubscribe$)
          )
          .subscribe(category => {
            this.albumService
              .addNewAlbum(this.albumModel)
              .pipe(takeUntil(this.unsubscribe$))
              .subscribe((res: AlbumInputModel) =>
                category['albums'].push(res['_id'])
              );
          });
      });
  }
}
