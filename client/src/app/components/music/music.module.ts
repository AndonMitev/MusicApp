import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Imported components
import { importComponents } from './imp-components';
//Custom modules
import { MusicRoutingModule } from './music.routing.module';
//Angular Material
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
