import {Injectable} from '@angular/core';
import {CanActivate, NavigationCancel, Router} from '@angular/router';
import {ControllerAuthApi} from '../../../api/endpoints/auth';

@Injectable()
export class UserGuard implements CanActivate {
  auth: ControllerAuthApi;
  can: boolean;
  url: Promise<string>;
  constructor(
    private router: Router
  ) {
    this.auth = new ControllerAuthApi();
    this.url = new Promise<string>(((resolve, reject) => {
      try {
        this.router.events.subscribe( (event) => {
          if (event instanceof NavigationCancel){
            resolve(event.url);
          }
        });
      } catch (e) {
        reject();
      }
    }));
  }
  async canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.url.then( redirect => {
        this.router.navigate(['/login'], {queryParams: { redirect}});
      }, () => {
        this.router.navigate(['/login']);
      });
    }
  }
}
