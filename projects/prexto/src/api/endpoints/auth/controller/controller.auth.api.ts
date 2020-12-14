import {ControllerCoreApi, EndpointCoreApi, SessionCore} from '../../../../core';
import {ModelUserApi , EntityUserApi } from '../../user';
import {environment} from '../../../../environments/environment';
export class ControllerAuthApi extends ControllerCoreApi<EntityUserApi, ModelUserApi>{
  session: SessionCore;
  constructor(){
    const endpoint = new EndpointCoreApi<ModelUserApi>( 'auth/');
    super(endpoint, EntityUserApi, ModelUserApi);
    this.session = new SessionCore();
  }
  logOut(){
    this.session.remove('access_token');
    window.location.href = '/';
  }
  logIn(user: ModelUserApi){
    return this.service.getEntpoint()
      .getHttp()
      .post(this.service.getEntpoint().getUrl(),
      {
        access_token: environment.MASTER_KEY,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }, {
        auth: {
          username: user.email.toString(),
          password: user.password.toString()
        }
      }
      ).then(r => {
        this.setToken(r.data.token);
      });
  }
  isLoggedIn(){
    const response =  this.session.cookies.get('access_token') !== undefined;
    if (response){
      this.setToken(this.session.cookies.get('access_token'));
    }
    return response;
  }
  restartError(){
    this.session.remove('errors');
  }
  incrementError(){
    let errors = this.getErrors();
    errors++;
    this.session.set('errors', errors.toString());
  }
  getErrors(){
    if (this.session.get('errors')){
      return parseInt(this.session.get('errors'));
    }else{
      return 0;
    }
  }
  getToken(){
    return {access_token: this.session.get('access_token')};
  }
  setToken(token: string){
    const expire = new Date();
    expire.setMinutes(expire.getMinutes() + 15 );
    this.session.cookies.set('access_token', token, {expires: expire} );
  }
}
