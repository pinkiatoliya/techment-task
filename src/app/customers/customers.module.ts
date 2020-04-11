import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CommonsModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CommonsModule,
    FormsModule,
    CustomersRoutingModule,

  ]
})
export class CustomersModule { }
