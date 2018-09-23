import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';

//Service
import { GetAllCategoriesService } from '../../../../core/services/categories/get-all.service';
//Model
import { ViewModelCategories } from '../../../../core/models/view-models/categories.model';
//State
import { AppState } from '../../../../store/app-state';

@Component({
  selector: 'get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent implements OnInit, OnDestroy {
  public categories$: Observable<ViewModelCategories[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private categoryServices: GetAllCategoriesService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.categoryServices
      .getAllCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.categories$ = this.store.pipe(
          select((state: AppState) => state.categories.all)
        );
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
