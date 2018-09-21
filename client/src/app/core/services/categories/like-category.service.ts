import { Injectable } from '@angular/core';
import { Put } from '../crud/put-method';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-state';

@Injectable({
  providedIn: 'root'
})
export class LikeCategoryService {
  constructor(private http: Put, private store: Store<AppState>) {}

  public likeCategory(category) {
    return this.http.put('music/categories', `like/${category._id}`, category);
  }
}
