import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetAllCategoriesService } from '../../../core/services/categories/get-all.service';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app-state';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public categories$: Observable<object>;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private categoryServices: GetAllCategoriesService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.categoryServices
      .getAllCategories()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.categories$ = this.store.pipe(
          select(state => state.categories.all)
        );
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
