import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { baseUrl } from './base-url';

@Injectable({
  providedIn: 'root'
})
export class Delete {
  constructor(private http: HttpClient) {}

  delete(currentModule: string, endPoint: string): Observable<Object> {
    return this.http.delete(baseUrl(currentModule, endPoint));
  }
}
