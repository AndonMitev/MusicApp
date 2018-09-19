import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {RegisterService } from './services/auth/register.service'

@NgModule({
  providers: [RegisterService]
})
export class ServiceModule {}