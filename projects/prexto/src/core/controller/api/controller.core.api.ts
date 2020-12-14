import {EmailModelCoreApi, ForeignkeyModelCoreApi, ModelCore, PrimaryKeyModelCoreApi} from '../../model';
import {ServiceCore} from '../../service/';
import {EndpointCoreApi} from '../../endpoint';
import {DaoCore} from '../../dao';
import {EntityCore} from '../../entity';
import {FieldsType} from '../header';
import {IndexDbCore} from '../../indexDb/IndexDbCore';
import {PasswordModelCore} from '../../model/types/password.model.core';


export class ControllerCoreApi<E extends EntityCore<M>, M extends ModelCore> {
  nameOfEntity: string;
  nameOfEntities: string;
  rows: Array<E>;
  service: ServiceCore<M>;
  protected db: IndexDbCore<M>;
  private readonly entity: new(dao: DaoCore<M>, model: M) => E;
  private readonly model: new() => M;

  constructor(
    endpoint: EndpointCoreApi<M>,
    entity: new(dao: DaoCore<M>, model: M) => E,
    model: new () => M,
    public useIndexDb: boolean = false
  ) {
    if (useIndexDb === true) {
      this.db = new IndexDbCore(endpoint.endpoint, model);
    }
    this.rows = [];
    this.entity = entity;
    this.model = model;
    this.service = new ServiceCore<M>(endpoint);
    this.nameOfEntities = 'Se te olvido definir el nombre en plural';
    this.nameOfEntity = 'Se te olvido definir el nombre en singular';
  }

  getNew(): E {
    return new this.entity(this.service.dao, new this.model());
  }

  getForeingKeyVisibleField(entity: E, key: string) {
    const foreignkey = entity.getPropertie(key);
    if (typeof foreignkey === 'object') {
      return foreignkey.getPropertie(foreignkey.visibleField);
    } else {
      return foreignkey;
    }
  }

  async cast(model: M): Promise<E> {
    const castedEntity = new this.entity(this.service.dao, Object.assign(new this.model(), model));
    for (const header of this.getNew().getHeaders()) {
      switch (header.type) {
        case FieldsType.ForeignKey.toString(): {
          await this.fillForeignKeys(castedEntity, model, header.name);
          break;
        }
        case FieldsType.PrimaryKey.toString(): {
          const primaryKey = new PrimaryKeyModelCoreApi(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Date.toString(): {
          const primaryKey = new Date(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Email.toString(): {
          const primaryKey = new EmailModelCoreApi(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Array.toString(): {
          const primaryKey = model[header.name];
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        case FieldsType.Password.toString(): {
          const primaryKey = new PasswordModelCore(model[header.name]);
          castedEntity.setPropertie(header.name, primaryKey);
          break;
        }
        default: {
        }
      }
    }
    return castedEntity;
  }

  async fillForeignKeys(castedEntity: E, model: M, namePropertie: string): Promise<E> {
    const controllerForeignKey = this.getControllerFromForeignKey(namePropertie);
    const fk = new ForeignkeyModelCoreApi(controllerForeignKey, model[namePropertie]);
    fk.entity = await controllerForeignKey.get(model[namePropertie])
      .then(entity => entity)
      .catch(error => controllerForeignKey.getNew());
    castedEntity.setPropertie(namePropertie, fk);
    return castedEntity;
  }
  getControllerFromForeignKey(foreingkKeyField: string) {
    return this.getNew().getPropertie(foreingkKeyField).controller;
  }

  async list(): Promise<Array<E>> {
    if (this.useIndexDb){
      return await this.listFromLocal();
    }
    let models: Array<M> = [];
    const entities: Array<E> = [];
    models = await this.service.list();
    for (const model of models) {
      entities.push(await this.cast(model));
    }
    this.rows = [];
    this.rows = entities;
    console.log('2');

    return entities;
  }

  async listFromLocal(renewIndexDb: boolean = false): Promise<Array<E>> {

    let models: Array<M> = [];

    if (this.useIndexDb === true) {
      console.log('3');

      if (renewIndexDb === true) {
        console.log('4');
        models = await this.db.deleteAll().then(async () => {
          const tmpModels = await this.service.list();
          await this.db.storeArray(tmpModels);
          console.log('guardo', tmpModels);
          return tmpModels;
        });
      } else {
        console.log('5');
        models = await this.db.list();
      }
    } else {
      console.log('6');
      models = await this.service.list();
    }
    const entities: Array<E> = [];
    for (const model of models) {
      entities.push(await this.cast(model));
    }
    this.rows = [];
    this.rows = entities;
    return entities;
  }

  async get(id: string): Promise<E> {

    return this.useIndexDb ?
      await this.db.get(id).then((model: M) => this.cast(model))
        .catch(async error =>
          await this.service.get(id)
            .then(async (model: M) => this.useIndexDb ? await this.db.storeOne(model) : model)
            .then(async (model: M) => await this.cast(model))
        ) :
      this.service.get(id)
        .then(async (model: M) => this.useIndexDb ? await this.db.storeOne(model) : model)
        .then(async (model: M) => await this.cast(model));
  }

  delete(id: string): Promise<E> {
    return this.service.delete(id)
      .then(async (modelCreated: M) => this.useIndexDb ? await this.db.remove(modelCreated) : modelCreated)
      .then(async (model: M) => await this.cast(model));
  }

  create(model: M): Promise<E> {
    return this.service.create(model)
      .then(async (modelCreated: M) => this.useIndexDb ? await this.db.storeOne(modelCreated) : modelCreated)
      .then(async (modelCreated: M) => await this.cast(modelCreated));
  }

  update(id: string, model: M): Promise<E> {
    return this.service.update(id, model)
      .then(async (modelUpdated: M) => this.useIndexDb ? await this.db.storeOne(modelUpdated) : modelUpdated)
      .then(async (modelUpdated: M) => await this.cast(modelUpdated));
  }

}
