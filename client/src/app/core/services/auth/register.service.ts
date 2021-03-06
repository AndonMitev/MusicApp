import { Injectable } from '@angular/core';
import { Post } from '../crud/post-method.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Register {
  constructor(private http: Post) {}

  registerUser<T>(body: T): Observable<T> {
    return this.http.post<T>('user', 'register', body);
  }
}
