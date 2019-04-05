import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
