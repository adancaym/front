import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrextoService } from '../services/prexto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserGuard, UiModule } from 'prexto';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SystemComponent } from './system/system.component';
import { SendengoComponent } from './system/sendengo/sendengo.component';
import { EcommerceComponent } from './system/ecommerce/ecommerce.component';
import { AvalesComponent } from './system/avales/avales.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    SendengoComponent,
    EcommerceComponent,
    AvalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgbModule,
    UiModule
  ],
  providers: [PrextoService, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
