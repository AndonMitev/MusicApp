import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

//Method
import { Post } from '../crud/post-method.service';
//Action
import { AddCategoryAction } from '../../../store/actions/categories';
//Model
import { InputCategoryModel } from '../../models/input-models/category.model';
//State
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {
  constructor(private http: Post, private store: Store<AppState>) {}

  public addNewCategory(categoryData: InputCategoryModel): Observable<void> {
    return this.http
      .post<InputCategoryModel>('music/categories', 'create', categoryData)
      .pipe(
        map((category: InputCategoryModel) =>
          this.store.dispatch(new AddCategoryAction(category))
        )
      );
  }
}
