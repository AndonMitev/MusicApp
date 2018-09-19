import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { importComponents } from './imp-components';
import { exportComponents } from './exp-components';
import { materialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, ...materialModule],
  declarations: [...importComponents],
  exports: [...exportComponents]
})
export class SharedModule {}
