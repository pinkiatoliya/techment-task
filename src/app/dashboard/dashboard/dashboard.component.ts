import { Component, OnInit } from '@angular/core';
import { customerHeader, Customer } from 'src/app/customers/customer-class';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customerHeader: any = customerHeader;
  customersList: Customer[]= [];
  orderHeader: any = [];
  ordersList: any = [];
  pagename: string = "dashboard";
  constructor(private commonService: CommonService) { }

  ngOnInit() {
        // Subscribe customers
        this.commonService.currentCustomerArr.subscribe(data => {
          this.customersList = data;
         });

         this.orderHeader = this.commonService.orderHeader;
         this.ordersList = this.commonService.ordersList;
  }

}
