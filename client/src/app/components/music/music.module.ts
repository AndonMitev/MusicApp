import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Imported components
import { importComponents } from './imp-components';
//Custom modules
import { MusicRoutingModule } from './music.routing.module';
//Angular Material
import { materialModule } from './material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ...materialModule
  ],
  declarations: [...importComponents]
})
export class MusicModule {}
