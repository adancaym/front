import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {MenuComponent} from '../ui/cruds/menu/menu.component';
import {PeopleComponent} from './people/people.component';
import {BanksComponent} from './banks/banks.component';
import {EndpointsComponent} from './endpoints/endpoints.component';
import {PermisionsComponent} from './permisions/permisions.component';
import {TablesComponent} from './tables/tables.component';
import {RolesComponent} from './roles/roles.component';
import {PrextoProductComponent} from './prexto-product/prexto-product.component';
import {FormComponent} from '../ui/cruds/cruds-components/form/form.component';
import {SystemComponent} from './system/system-list/system.component';
import {UserGuard} from '../ui/guards';
import {SystemFormComponent} from './system/system-form/system-form.component';
import {SystemPrextoProductsComponent} from './system-prexto-products/system-prexto-products.component';
import {SystemModule} from './system/system.module';



const routes: Routes = [
  {path: '', component: MenuComponent, canActivate: [UserGuard]},
  {path: 'users', component: UsersComponent, canActivate: [UserGuard]},
  {path: 'people', component: PeopleComponent, canActivate: [UserGuard]},
  {path: 'banks', component: BanksComponent, canActivate: [UserGuard]},
  {path: 'endpoints', component: EndpointsComponent, canActivate: [UserGuard]},
  {path: 'permisions', component: PermisionsComponent, canActivate: [UserGuard]},
  {path: 'tables', component: TablesComponent, canActivate: [UserGuard]},
  {path: 'roles', component: RolesComponent, canActivate: [UserGuard]},
  {path: 'prextoproducts', component: PrextoProductComponent, canActivate: [UserGuard]},
  {path: 'systemproducts', component: SystemPrextoProductsComponent, canActivate: [UserGuard]},
  {path: 'systems', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) , canActivate: [UserGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudsApiRoutingModule { }
