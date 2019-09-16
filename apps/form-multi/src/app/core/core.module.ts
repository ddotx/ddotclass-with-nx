import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UiNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UiNavbarComponent]
})
export class CoreModule { }
