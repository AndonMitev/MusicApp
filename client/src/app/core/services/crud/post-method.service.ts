import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = `localhost:1337/`

@Injectable({
  providedIn: 'root'
})
export class Post {
  constructor(private http: HttpClient) { }

  post<T>(body, endPoint, currentModule) {
    return this.http.post(baseUrl, body)
  }
}
