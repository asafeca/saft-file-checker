import { SaftAttributeModel } from '../../../../domain/models/HeaderAttributeModel';
import { DataResult, IDataResult } from '../../../commons/iresult';

export class TaxValidation {
  static isTaxValid({
    taxAttributeList,
    taxNodes,
  }: {
    taxAttributeList: SaftAttributeModel[];
    taxNodes: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const attrKey of Object.keys(taxAttributeList)) {
      const attribute = taxAttributeList[attrKey as any];

      const result = this.taxChildValid({ element: attribute, taxNodes });

      if (!result.success) {
        return result;
      }
    }

    return new DataResult({ message: 'Ficheiro valido', success: true });
  }

  private static taxChildValid({
    element,
    taxNodes,
  }: {
    element: SaftAttributeModel;
    taxNodes: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const nodeKey of Object.keys(taxNodes)) {
      const taxNode = taxNodes[nodeKey as any];

      if (taxNode.nodeName === element.getName()) {
        return new DataResult({ message: 'Ficheiro valido', success: true });
      }
    }

    return new DataResult({ success: false, message: `[${element.getName()}] não encontrado!` });
  }
}
