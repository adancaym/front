import { HeaderControllerCoreApi } from './header.controller.core.api';

describe('Header', () => {
  it('should create an instance', () => {
    const header = { name: '', type: '', tag: ''};
    expect(new HeaderControllerCoreApi(header)).toBeTruthy();
  });
});
