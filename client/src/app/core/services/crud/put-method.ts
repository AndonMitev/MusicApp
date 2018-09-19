import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class Put {
  constructor(private http: HttpClient) {}

  put<T>(currentModule: string, endPoint: string, body: T): Observable<Object> {
    return this.http.put<T>(baseUrl(currentModule, endPoint), body);
  }
}
