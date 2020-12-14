export class HeaderControllerCoreApi{
  name: string;
  type: string;
  tag: string;

  constructor(header: {name: string, type: string, tag: string}) {
    this.name = header.name;
    this.type = header.type;
    this.tag = header.tag;
  }
}
