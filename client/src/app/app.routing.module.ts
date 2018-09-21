import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: 'user/register', component: RegisterComponent },
  { path: 'music', loadChildren: './components/music/music.module#MusicModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
