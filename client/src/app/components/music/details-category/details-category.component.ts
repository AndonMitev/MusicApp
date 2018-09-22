import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

//Service
import { GetCategoryDetailsService } from '../../../core/services/categories/details.service';
//Model
import { ViewModelCategories } from '../../../core/models/view-models/categories.model';
//State
import { AppState } from '../../../store/app-state';

@Component({
  selector: 'details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit, OnDestroy {
  public category$: Observable<ViewModelCategories>;
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private actRoute: ActivatedRoute,
    private store: Store<AppState>,
    private categoryServices: GetCategoryDetailsService
  ) {}

  public ngOnInit(): void {
    this.actRoute.paramMap.subscribe((res: ParamMap) => {
      const id = res['params']['id'];

      this.categoryServices
        .getCategoryDetails(id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          () =>
            (this.category$ = this.store.pipe(
              select(state => state.categories.details)
            ))
        );
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
