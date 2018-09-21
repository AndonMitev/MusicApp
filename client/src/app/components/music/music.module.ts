import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { importComponents } from './imp-components';
import { MusicRoutingModule } from './music.routing.module';
import { materialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MusicRoutingModule, ...materialModule],
  declarations: [...importComponents]
})
export class MusicModule {}
