import { Injectable } from '@angular/core';

import { Post } from '../crud/post-method.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Login {
  constructor(private http: Post) {}

  loginUser<T>(data: T): Observable<T> {
    return this.http.post('user', 'login', data);
  }
}
