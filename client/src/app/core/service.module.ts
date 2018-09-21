import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crudMethods } from './services/crud';
import { userServices } from './services/auth';
import { categoryServices } from './services/categories';

@NgModule({
  providers: [...crudMethods, ...userServices, ...categoryServices]
})
export class ServiceModule {}
