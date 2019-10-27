import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule, BsDatepickerModule, TimepickerModule, RatingModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  exports: [
    ButtonsModule,
    BsDatepickerModule,
    TimepickerModule,
    RatingModule
  ]
})
export class UiNgxModule {}
