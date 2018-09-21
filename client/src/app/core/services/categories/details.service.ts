import { Injectable } from '@angular/core';
import { Get } from '../crud/get-method';
import { map } from 'rxjs/operators';
import { ViewModelCategories } from '../../models/view-models/categories.model';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { GetCategoryDetailsAction } from '../../../store/actions/categories';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryDetailsService {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getCategoryDetails(id: string) {
    return this.http
      .get('music/categories', `details/${id}`)
      .pipe(
        map((res: ViewModelCategories) =>
          this.store.dispatch(new GetCategoryDetailsAction(res))
        )
      );
  }
}
