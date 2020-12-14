import { EntityFileApi } from './entity.file.api';
import {ModelFileApi} from "../../../models";
import {DaoCore} from "../../../../core/dao";
import {EndpointCoreApi} from "../../../../core/endpoint";

describe('EntityFileApi', () => {
  it('should create an instance', () => {
    expect(
      new EntityFileApi(
        new DaoCore<ModelFileApi>( new EndpointCoreApi<ModelFileApi>('')),
        new ModelFileApi()
      )
    ).toBeTruthy();
  });
});
