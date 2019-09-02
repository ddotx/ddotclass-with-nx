import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { HomeComponent } from './home/home.component';
import { UiNavbarModule } from '@ddotclass/ui-navbar'

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, UserSettingsFormComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiNavbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
