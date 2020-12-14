import {EndpointCoreInternal} from '../../endpoint';

export class ControllerCoreInternal{
  constructor(protected endpoint: EndpointCoreInternal){
  }
  get(segment: string) {
    return this.endpoint.get(segment);
  }
  post(segment: string, data){
    return this.endpoint.post(segment, data);
  }
  put(segment: string, data){
    return this.endpoint.put(segment, data);
  }

}
