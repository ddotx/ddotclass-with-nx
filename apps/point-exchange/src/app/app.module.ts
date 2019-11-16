import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiNavbarComponent } from './core/ui-navbar/ui-navbar.component';
import { CoreModule } from './core/core.module';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';
import { CardCreateComponent } from './card/card-create/card-create.component';
import { UiNgxModule} from '@ddotclass/ui-ngx'

@NgModule({
  declarations: [AppComponent, UiNavbarComponent, CardListComponent, CardDetailComponent, CardCreateComponent],
  imports: [BrowserModule, CoreModule,UiNgxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
