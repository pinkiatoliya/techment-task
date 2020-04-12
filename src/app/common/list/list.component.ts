import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class EventObject {
  index: number;
  action: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() bodyItems: any;
  @Input() headerItems: any;
  @Input()  callingFrom: any;
  @Output() actionEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  actionOnItem(indx, action){
    const eventObject: EventObject = new EventObject();
    eventObject.index = indx;
    eventObject.action = action;
    this.actionEmitter.emit(eventObject);
  }

}
