import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './base-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Post {
  constructor(private http: HttpClient) {}

  post<T>(currentModule: string, endPoint: string, body: T): Observable<T> {
    return this.http.post<T>(baseUrl(currentModule, endPoint), body);
  }
}
