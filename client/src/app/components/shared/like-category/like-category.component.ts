import { Component, Input } from '@angular/core';
//Service
import { LikeCategoryService } from '../../../core/services/categories/like-category.service';

@Component({
  selector: 'like-category',
  templateUrl: './like-category.component.html',
  styleUrls: ['./like-category.component.css']
})
export class LikeCategoryComponent {
  @Input('category')
  category;

  constructor(public categoryServices: LikeCategoryService) {}

  public like(): void {
    const userId: string = localStorage.getItem('userId');

    if (this.category.likes.indexOf(userId) !== -1) {
      this.category.likes = this.category.likes.filter(id => id !== userId);
    } else {
      this.category.likes.push(userId);
    }

    this.categoryServices
      .likeCategory(this.category)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
