import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { baseUrl } from './base-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Get {
  constructor(private http: HttpClient) {}

  get<T>(currentModule: string, endPoint: string): Observable<Object> {
    return this.http.get(baseUrl(currentModule, endPoint));
  }
}
