import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sideBarService: SidebarService,
     private currentRoute: ActivatedRoute) { }
  currentRoutePath: string;   
  menuList: any = [];
  @Input() navToggle: boolean;
  subIndexCount: number;
  ngOnInit() {
    this.currentRoutePath = window.location.href.split('/')[3];
    this.subIndexCount = 1;    
    this.menuList = this.sideBarService.getNavigationMenu();
    console.log(this.navToggle, this.menuList, this.currentRoutePath);
    if(this.currentRoutePath == 'customers')     
      this.getClickedMenu('Customer');

    if(this.currentRoutePath == 'orders')     
      this.getClickedMenu('Order');

    if(this.currentRoutePath ==  'dashboard')
      this.getClickedMenu('Home');
  }

  getClickedMenu(menu){
    console.log(menu);
    switch (menu) {
      case 'Home':
        this.subIndexCount = 1;
        break;
        case 'Customer':
          this.subIndexCount = 2;
          break;
          case 'Order':
          this.subIndexCount = 3;
          break;
          case 'Product':
          this.subIndexCount = 4;
          break;
      default:
        break;
    }
  }

}
