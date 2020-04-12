import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sideBarService: SidebarService) { }
  menuList: any = [];
  ngOnInit() {
    this.menuList = this.sideBarService.getNavigationMenu();
  }

}
