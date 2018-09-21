import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { CategoriesComponent } from './categories/categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  {
    path: 'categories/all',
    component: CategoriesComponent
  },
  {
    path: 'categories/details/:id',
    component: DetailsCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
