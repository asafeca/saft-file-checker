import { DataResult, IDataResult } from '../commons/iresult';
import { SaftValidation } from '../commons/saft_validation';

export class SaftCompanyAddress {
  private address: ChildNode;
  constructor(address: ChildNode) {
    this.address = address;
  }

  isCompanyAddressValid(): IDataResult {
    if (this.address !== null && this.address !== undefined) {
      const headerList = this.address.childNodes;
      for (const keys of Object.keys(headerList)) {
        const currentNode = headerList[keys as any];
        if (currentNode.nodeName !== '#text') {
          if (!SaftValidation.isString(currentNode.textContent)) {
            return new DataResult({
              message: `Ficheiro inválido [${currentNode.nodeName}] não encontrado`,
              success: false,
            });
          }
        }
      }
      return new DataResult({ message: 'Ficheiro valido', success: true });
    }

    return new DataResult({
      message: `Ficheiro inválido [Address] não é válido`,
      success: false,
    });
  }
}
