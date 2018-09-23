import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crudMethods } from './services/crud';
import { userServices } from './services/auth';
import { categoryServices } from './services/categories';
import { albumServices } from './services/album';

@NgModule({
  providers: [
    ...crudMethods,
    ...userServices,
    ...categoryServices,
    ...albumServices
  ]
})
export class ServiceModule {}
