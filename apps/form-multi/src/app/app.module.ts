import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

import {UiNgxModule} from '@ddotclass/ui-ngx'
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReactiveFormComponent, UserSettingsFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    UiNgxModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
