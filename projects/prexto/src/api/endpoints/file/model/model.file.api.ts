import {ModelCore} from '../../../../core/model';

export class ModelFileApi extends ModelCore{
    user: string;
    file: string;
    ext: string;
    name: string;
    size: number;
    mime: string;

  constructor(){
    super();
    this.user = '';
    this.file = '';
    this.ext = '';
    this.name = '';
    this.size = 0;
    this.mime = '';
  }


}
