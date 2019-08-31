import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import {UiMaterialModule} from '@ddotclass/ui-material'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    FormsModule,
    ReactiveFormsModule,
    UiMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
