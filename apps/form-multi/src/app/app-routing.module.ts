import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'form-template', component: UserSettingsFormComponent },
  { path: 'form-reactive', component: ReactiveFormComponent },
  { path: 'products', loadChildren: './product/product.module#ProductModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
