import { SaftNamedParameters } from '../../components/commons/NamedParameters';

export class SaftAttributeModel {
  private name: string;
  private type: string;
  private isParent: boolean;

  constructor({ name, type, isParent }: SaftNamedParameters) {
    this.name = name;
    this.type = type;
    this.isParent = isParent;
  }

  // SETTING ATTRIBUTES

  public setName(name: string): void {
    this.name = name;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public setIsParent(isParent: boolean): void {
    this.isParent = isParent;
  }

  // GETTING ATTRIBUTES

  public getName(): string {
    return this.name;
  }

  public getType(): string {
    return this.type;
  }

  public getIsParent(): boolean {
    return this.isParent;
  }
}
