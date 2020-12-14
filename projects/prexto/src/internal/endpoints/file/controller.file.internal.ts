import {ControllerCoreInternal, EndpointCoreInternal} from '../../../core';
import {ControllerUserApi, ModelUserApi} from '../../../api/endpoints/user';
import {ModelFileApi} from '../../../api/endpoints/file';

export class ControllerFileInternal extends ControllerCoreInternal {
  controllerUserApi: ControllerUserApi;

  constructor() {
    const endpoint = new EndpointCoreInternal('file/');
    super(endpoint);
    this.controllerUserApi = new ControllerUserApi();
  }

  async uploadFile(formData: FormData, user?: ModelUserApi): Promise<ModelFileApi> {
    if (!user) {
      user = await this.controllerUserApi.me();
    }
    formData.append('user', user.id.toString());
    return await this.endpoint.post('', formData, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  getUrlByIdFile(idFile: string): string {
    return this.endpoint.getUrl().toString() + idFile;
  }

  convertPdfToImage(file: ModelFileApi): Promise<ModelFileApi> {
    return this.endpoint.get('convertPdfToImage/' + file.id);
  }

}
