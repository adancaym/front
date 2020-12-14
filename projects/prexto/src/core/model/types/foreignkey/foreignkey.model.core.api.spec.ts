import { ForeignkeyModelCoreApi } from './foreignkey.model.core.api';
import {ControllerCoreApi} from "../../../controller";
import {EndpointCoreApi} from "../../../endpoint";
import {ModelCore} from "../../model";
import {EntityCore} from "../../../entity";

describe('Foreignkey', () => {
  it('should create an instance', () => {
    const controller = new ControllerCoreApi(new EndpointCoreApi<ModelCore>(''), EntityCore, ModelCore);
    expect(new ForeignkeyModelCoreApi(controller, '')).toBeTruthy();
  });
});
