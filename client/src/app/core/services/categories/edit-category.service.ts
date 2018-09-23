import { Injectable } from '@angular/core';
import { Put } from '../crud/put-method';

@Injectable({
  providedIn: 'root'
})
export class EditCategoryService {
  constructor(private http: Put) {}

  editCategory(category) {
    return this.http.put('music/categories', `edit/${category._id}`, category);
  }
}
