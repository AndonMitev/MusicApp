import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { GetCategoriesComponent } from './categories/get-categories/get-categories.component';
import { DetailsCategoryComponent } from './categories/details-category/details-category.component';
import { AlbumAddComponent } from './albums/album-add/album-add.component';
import { GetAlbumsComponent } from './albums/get-albums/get-albums.component';
import { AddSongComponent } from './songs/add-song/add-song.component';
import { AllSongsComponent } from './songs/all-songs/all-songs.component';

const routes: Routes = [
  {
    path: 'categories/all',
    component: GetCategoriesComponent
  },
  {
    path: 'categories/details/:id',
    component: DetailsCategoryComponent
  },
  {
    path: 'albums/add',
    component: AlbumAddComponent
  },
  {
    path: 'albums/all',
    component: GetAlbumsComponent
  },
  {
    path: 'songs/add',
    component: AddSongComponent
  }, {
    path: 'songs/all',
    component: AllSongsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule {}
