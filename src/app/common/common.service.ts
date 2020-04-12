import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Customer} from '../customers/customer-class';

let customersList = [
  { "name": 'Kevin', "mobile": 34234234232, "email": "kevin@yopmail.com"},
  { "name": 'Michael',"mobile": 34234234232, "email": "michael@yopmail.com"},
  { "name": 'Neil', "mobile": 34234234232, "email": "neil@yopmail.com"}
];
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  ordersList: any = [{
    "orderId": 101,
    "customername": "Kelin",
    "customeremail": "kevin@yopmail.com",
    "noofitems": 5,
    "billingamt": 5000,
    "isVisible": true
  },
  {
    "orderId": 102,
    "customername": "Michael",
    "customeremail": "michael@yopmail.com",
    "noofitems": 10,
    "billingamt": 4000,
    "isVisible": true
  },
  {
    "orderId": 103,
    "customername": "Neil",
    "customeremail": "neil@yopmail.com",
    "noofitems": 3,
    "billingamt": 15000,
    "isVisible": true
  }];
  orderHeader: any = [
    {"name": 'OrderID',  "code": "orderId"},
    {"name": 'Customer Name',  "code": "customername"},
    {"name": 'Customer Name',  "code": "customeremail"},
    {"name": 'No Of Items',  "code": "noofitems"},
    {"name": 'Billing Amount',  "code": "billingamt"}
  ];

  constructor() {
    this.setCustomerArray(customersList);
   }

  private customerArray = new BehaviorSubject(new Array<Customer>());
  currentCustomerArr: Observable<Customer[]> = this.customerArray.asObservable();
  

  setCustomerArray(customersLst: Customer[]){
    this.customerArray.next(customersLst);
  }
}
