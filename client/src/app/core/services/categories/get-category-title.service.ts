import { Injectable } from '@angular/core'
import {Get} from '../crud/get-method'

@Injectable({
  providedIn:'root'
})
export class GetCategoryByTitleService {
  constructor(private http: Get) { }

  getCategoryByTitle(title: string) {
    
  }
}