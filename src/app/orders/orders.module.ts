import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { CommonsModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    CommonsModule,
    FormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
