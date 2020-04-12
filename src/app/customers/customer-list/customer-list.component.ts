import { Component, OnInit, OnDestroy } from '@angular/core';
import {Customer, customerHeader} from '../customer-class';
import { CommonService } from 'src/app/common/common.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  isEditCustomer: boolean = false;
  selectedCustomer: any = {};
  customerHeader: any = customerHeader;
  customersList: Customer[]= [];
  selectedIndex: number;

  constructor(private commonService: CommonService) { }
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
    if(!!frmData.email && !!frmData.mobile && !!frmData.name){
      this.customersList[this.selectedIndex] = frmData;
      if(!!this.isEditCustomer){
        // Update customer
        this.commonService.setCustomerArray(this.customersList);
      }else{
        this.customersList.push(frmData);
        this.commonService.setCustomerArray(this.customersList);
      }
      this.resetForm();
    }

  }

  resetForm(){
    this.selectedCustomer = {};
    this.isEditCustomer = false;
  }

  ngOnDestroy(){
    Observable.create((observer) =>  {
      observer.next(true)
      observer.complete();
     });
  }

}
