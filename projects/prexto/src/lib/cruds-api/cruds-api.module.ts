import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrudsComponentsModule} from '../ui/cruds/cruds-components';
import {CrudsApiRoutingModule} from './cruds-api.routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UsersComponent} from './users/users.component';
import {PeopleComponent} from './people/people.component';
import {TablesComponent} from './tables/tables.component';
import {BanksComponent} from './banks/banks.component';
import {EndpointsComponent} from './endpoints/endpoints.component';
import {FileComponent} from './file/file.component';
import {PermisionsComponent} from './permisions/permisions.component';
import {RolesComponent} from './roles/roles.component';
import { PrextoProductComponent } from './prexto-product/prexto-product.component';
import {UiModule} from '../ui';
import { SystemPrextoProductsComponent } from './system-prexto-products/system-prexto-products.component';
import {SystemModule} from './system/system.module';

@NgModule({
  declarations: [
    UsersComponent,
    PeopleComponent,
    TablesComponent,
    BanksComponent,
    EndpointsComponent,
    FileComponent,
    PermisionsComponent,
    RolesComponent,
    PrextoProductComponent,
    SystemPrextoProductsComponent,

  ],
  exports: [
    UsersComponent,
    PeopleComponent,
    TablesComponent,
    BanksComponent,
    EndpointsComponent,
    FileComponent,
    PermisionsComponent,
  ],
  imports: [
    SystemModule,
    CommonModule,
    CrudsComponentsModule,
    CrudsApiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CrudsComponentsModule,
    UiModule
  ]
})
export class CrudsApiModule {
}
