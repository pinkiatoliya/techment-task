import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer-class';
import { CommonService } from 'src/app/common/common.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  isEditCustomer: boolean = false;
  selectedCustomer: any = {};
  constructor(private commonService: CommonService) { }
  customerHeader: any = [
    {"name": "Customer Name", "code": "name"},
    {"name": "Mobile Number", "code": "mobile"},
    {"name": "Email ID", "code": "email"}
  ];
  customersList: Customer[]= [];
  selectedIndex: number;

  ngOnInit() {
    // Subscribe customers
    this.commonService.currentCustomerArr.subscribe(data => {
     this.customersList = data;
    });
  }

  onActionEmitter(data){
    console.log(data);
    if(data.action === 'delete')
      this.deleteCustomer(data.index);
    if(data.action === 'edit')
      this.editCustomer(data.index);
  }

  deleteCustomer(indx){
    this.customersList.splice(indx, 1);
  }

  editCustomer(index){
    this.selectedIndex = index;
    this.isEditCustomer = true;
    this.selectedCustomer = JSON.parse(JSON.stringify(this.customersList[index]));
  }

  saveFrmData(frmData: Customer){
    console.log(frmData);
    this.customersList[this.selectedIndex] = frmData;
    if(!!this.isEditCustomer){
      // Update customer
      this.commonService.setCustomerArray(this.customersList);
    }else{
      this.customersList.push(frmData);
    }
    this.resetForm();
  }

  resetForm(){
    this.selectedCustomer = {};
    this.isEditCustomer = false;
  }

}
