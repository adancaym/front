import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {ControllerSystemApi} from '../../../api/endpoints/system';
import {ControllerAuthApi} from '../../../api';

@Injectable({
  providedIn: 'root'
})
export class SystemGuard implements CanActivate {
  controllerSystemApi: ControllerSystemApi;
  controlllerAuthApi: ControllerAuthApi;
  constructor(
    protected router: Router
  ) {
    this.controllerSystemApi = new ControllerSystemApi(true);
    this.controlllerAuthApi = new ControllerAuthApi();
  }
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.controllerSystemApi.getOneBySystemName(next.params.system).then( entity => {
      this.controlllerAuthApi.session.set('system', JSON.stringify(entity.getModel()));
      return true;
    }).catch(reason => {
      return this.router.navigate(['/']).then(() =>{
        return false;
      });
    });
  }
}
