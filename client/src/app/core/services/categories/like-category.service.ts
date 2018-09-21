import { Injectable } from '@angular/core';
import { Put } from '../crud/put-method';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeCategoryService {
  constructor(private http: Put) {}

  public likeCategory(category) {
    return this.http.put('music/categories', `like/${category._id}`, category); 
  }
}
