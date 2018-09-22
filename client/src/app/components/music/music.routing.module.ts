import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { CategoriesComponent } from './categories/categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AlbumAddComponent } from './album-add/album-add.component';

const routes: Routes = [
  {
    path: 'categories/all',
    component: CategoriesComponent
  },
  {
    path: 'categories/details/:id',
    component: DetailsCategoryComponent
  },
  {
    path: 'albums/add',
    component: AlbumAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
