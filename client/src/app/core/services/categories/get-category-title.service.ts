import { Injectable } from '@angular/core';
import { Get } from '../crud/get-method';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GetCategoryDetailsAction } from '../../../store/actions/categories';
import { ViewCategoriesModel } from '../../models/view-models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryByTitleService {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getCategoryByTitle(title: string): Observable<void> {
    return this.http
      .get('music/categories', title)
      .pipe(
        map((category: ViewCategoriesModel) =>
          this.store.dispatch(new GetCategoryDetailsAction(category))
        )
      );
  }
}
