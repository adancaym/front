import {ModelCore, PrimaryKeyModelCoreApi} from '../model';
import {EndpointCoreApi} from '../endpoint';
export class DaoCore <M extends ModelCore>{
  constructor(private endpoint: EndpointCoreApi<M>) {}
  create(model: M): Promise<M>{
    return this.endpoint.create(model);
  }
  update(model: M): Promise<M> {
    return this.endpoint.update(model.id.toString(), model);
  }
  get(id: PrimaryKeyModelCoreApi): Promise<M> {
    return this.endpoint.get(id.toString());
  }
  list(): Promise<Array<M>> {
    return this.endpoint.list();
  }
  delete(id: string): Promise<M> {
    return this.endpoint.delete(id);
  }
}
