import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

//Methos
import { Get } from '../crud/get-method';
//Action
import { GetCategoryDetailsAction } from '../../../store/actions/categories';
//Model
import { ViewCategoriesModel } from '../../models/view-models/categories.model';
//State
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class GetCategoryDetailsService {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getCategoryDetails(id: string): Observable<void> {
    return this.http
      .get<ViewCategoriesModel>('music/categories', `details/${id}`)
      .pipe(
        map((res: ViewCategoriesModel) =>
          this.store.dispatch(new GetCategoryDetailsAction(res))
        )
      );
  }
}
