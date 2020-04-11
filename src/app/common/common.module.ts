import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonService } from './common.service';

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  providers: [
    CommonService
  ]
})
export class CommonsModule { }
