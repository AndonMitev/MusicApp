import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

//Method
import { Get } from '../crud/get-method';
//Action
import { GetAllCategoriesAction } from '../../../store/actions/categories';
//Model
import { ViewCategoriesModel } from '../../models/view-models/categories.model';
//State
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class GetAllCategoriesService {
  constructor(private http: Get, private store: Store<AppState>) {}

  public getAllCategories(): Observable<void> {
    return this.http
      .get<ViewCategoriesModel[]>('music/categories', 'all')
      .pipe(
        map((categories: ViewCategoriesModel[]) =>
          this.store.dispatch(new GetAllCategoriesAction(categories))
        )
      );
  }
}
