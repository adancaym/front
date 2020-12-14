// @ts-ignore
const PouchDB = require('pouchdb');

import {ModelCore} from '../model/model';

export class IndexDbCore<M extends ModelCore> {
  db: any;
  constructor(protected name: string, protected model: new () => M) {
    this.db = new PouchDB(name);
  }
  list(): Promise<Array<M>> {
    return this.db.allDocs({include_docs: true, descending: true}).then(response => {
      const result = response.rows;
      return result.map(model => Object.assign(new this.model(), model.doc)).map( model => {
        if (model._id){
          delete model._id;
          return model;
        }else{
          return model;
        }
      });
    });
  }
  get(id){
    return this.db.get(id).then(m => {
      if (m._id){
        delete m._id;
        return m;
      }else {
        return m;
      }
    });
  }
  remove(m){
    return this.db.remove(m.id).then( rm => {
      return rm;
    });
  }
  async storeOne(m: M) {
    const tmp = JSON.parse(JSON.stringify(m));
    tmp._id = tmp.id;
    return await this.db.put(tmp)
      .then(() => {
        console.log('guardo', m);
        return m;
      })
      .catch(error => console.log(error, tmp));
  }
  async storeArray(array: Array<M>) {
    const tmp: Array<any> = JSON.parse(JSON.stringify(array));
    for (const t of tmp){
      t._id = t.id;
    }
    return await this.db.bulkDocs(tmp).then(() => {
      return array;
    });
  }
  async deleteAll() {
    await this.db.destroy().then(() => {
      this.db = new PouchDB(this.name);
    });
  }
}
