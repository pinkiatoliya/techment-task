import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common/common.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  // This component I create to just make use of list component multiple times.
  
  ordersList: any = [];
  orderHeader: any = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.orderHeader = this.commonService.orderHeader;
    this.ordersList = this.commonService.ordersList;
  }

}
