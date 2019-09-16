import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule, BsDatepickerModule, TimepickerModule, RatingModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
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
