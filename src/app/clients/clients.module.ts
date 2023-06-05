import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { CustomersRoutingModule } from '../customers/customers-routing.module';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ClientsComponent
  ]
})
export class ClientsModule { }
