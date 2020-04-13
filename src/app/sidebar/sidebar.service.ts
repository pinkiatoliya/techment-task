import { Injectable } from '@angular/core';
var menuList:any = 
    [
      {
          "id": 1,
          "menuName": "Home",
          'path': '',
          "isVisible": true,
          "submenu":[
            {
                  "id": 11,
                  "menuName": "Acount Setting",
                  'path': '',
            }
          ]
      },
      {
        "id": 1,
        "menuName": "Customer",
        'path': '/customers',
        "isVisible": true,
        "submenu":[
            {
                  "id": 12,
                  "menuName": "Customer List",
                  'path': '/customers',
            },
            {
                  "id": 13,
                  "menuName": "Add New Customer",
                  'path': '/add',
            }
          ]
      },
      {
        "id": 1,
        "menuName": "Order",
        "isVisible": true,
        'path': '/orders',
          "submenu":[
            {
                  "id": 14,
                  "menuName": "Order List",
                  'path': '/orders',
            },
            {
                  "id": 13,
                  "menuName": "Add New Order",
                  'path': '/add',
            }
          ]
      },
      {
        "id": 1,
        "menuName": "Product",
        "isVisible": false,
        'path': '/produt',
      }
    ];
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }
  // get Menu list
  getNavigationMenu(){
    return menuList;
  }

}
