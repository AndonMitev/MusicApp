import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

//Method
import { Post } from '../crud/post-method.service';
//Action
import { AddNewCategoryAction } from '../../../store/actions/categories';
//Model
import { CategoryInputModel } from '../../models/input-models/category.model';
//State
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class AddNewCategoryService {
  constructor(private http: Post, private store: Store<AppState>) {}

  public addNewCategory(categoryData: CategoryInputModel): Observable<void> {
    return this.http
      .post<CategoryInputModel>('music/categories', 'create', categoryData)
      .pipe(
        map((category: CategoryInputModel) =>
          this.store.dispatch(new AddNewCategoryAction(category))
        )
      );
  }
}
