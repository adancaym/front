import {DaoCore} from '../dao';
import {EndpointCoreApi} from '../endpoint';
import {ModelCore} from '../model';

export class ServiceCore<M extends ModelCore> {
  dao: DaoCore<M>;
  constructor(protected endpoint: EndpointCoreApi<M>) {
    this.dao = new DaoCore<M>(endpoint);
  }
  getEntpoint(): EndpointCoreApi<M>{
    return this.endpoint;
  }
  list(): Promise<Array<M>> {
    return this.dao.list();
  }
  get(id: string): Promise<M>{
    return this.dao.get(id);
  }
  delete(id: string): Promise<M>{
    return this.dao.delete(id);
  }
  create(model: M): Promise<M>{
    return this.dao.create(model);
  }
  update(id: string, model: M): Promise<M>{
    return this.dao.update(model);
  }
}
