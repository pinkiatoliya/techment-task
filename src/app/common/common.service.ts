import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Customer} from '../customers/customer-class';
let customerHeader: any = [
  {"name": "Customer Name", "code": "name"},
  {"name": "Mobile Number", "code": "mobile"},
  {"name": "Email ID", "code": "email"}
];
let customersList = [
  { "name": 'Kevin', "mobile": 34234234232, "email": "pinkiatoliya@yopmail.com"},
  { "name": 'Michael',"mobile": 34234234232, "email": "pinkiatoliya@yopmail.com"},
  { "name": 'Neil', "mobile": 34234234232, "email": "pinkiatoliya@yopmail.com"}
];

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() {
    this.setCustomerArray(customersList);
   }

  private customerArray = new BehaviorSubject(new Array<Customer>());
  currentCustomerArr: Observable<Customer[]> = this.customerArray.asObservable();
  

  setCustomerArray(customersList: Customer[]){
    this.customerArray.next(customersList);
  }
}
