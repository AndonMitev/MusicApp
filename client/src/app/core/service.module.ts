import { NgModule } from '@angular/core';

import { crudMethods } from './services/crud';
import { userServices } from './services/auth';
import { categoryServices } from './services/categories';
import { albumServices } from './services/album';
import { songServices } from './services/song';

@NgModule({
  providers: [
    ...crudMethods,
    ...userServices,
    ...categoryServices,
    ...albumServices,
    ...songServices
  ]
})
export class ServiceModule {}
