import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const url = `http://localhost:1337/user/register`

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  registerUser(body) {
    return this.http.post(url, body)
  }
}