import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { crudMethods } from './services/crud';
import { userServices } from './services/auth';

@NgModule({
  providers: [...crudMethods, ...userServices]
})
export class ServiceModule {}
