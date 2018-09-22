import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { importComponents } from './imp-components';
import { MusicRoutingModule } from './music.routing.module';
import { materialModule } from './material.module';



@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    ...materialModule,
    ReactiveFormsModule
  ],
  declarations: [...importComponents]
})
export class MusicModule {}
