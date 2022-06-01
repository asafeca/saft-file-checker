import { SaftAttributeModel } from '../../../../domain/models/HeaderAttributeModel';
import { DataResult, IDataResult } from '../../../commons/iresult';
import { SaftAttributeList } from '../../../commons/saft_attributes_list';
import { SaftValidation } from '../../../commons/saft_validation';

export class LineValidation {
  static isLineValid({
    lineNodes,
    invoiceType,
  }: {
    lineNodes: NodeListOf<ChildNode>;
    invoiceType: SaftAttributeModel;
  }): IDataResult {
    const lineAttributeList =
      invoiceType.getName() === 'NC' ? SaftAttributeList.NCLineAttributes : SaftAttributeList.FTLineAttributes;

    // CHECK ALL ATTRIBUTES
    const lineResult = SaftValidation.verifyAttributesInTheNodes({
      nodeList: lineNodes,
      attributes: lineAttributeList,
    });

    if (!lineResult.success) {
      return lineResult;
    }

    for (const nodeKey of Object.keys(lineNodes)) {
      const currentNode = lineNodes[nodeKey as any];
      if (currentNode.nodeName === 'Tax') {
        const taxNodes = currentNode.childNodes;
        if (!(taxNodes.length - 1 <= 0)) {
          const taxAttributes = SaftAttributeList.LineTaxAttributes;
          const taxResult = SaftValidation.verifyAttributesInTheNodes({
            nodeList: taxNodes,
            attributes: taxAttributes,
          });

          if (!taxResult.success) {
            return taxResult;
          }
        } else {
          return new DataResult({ message: `Elemento [${currentNode.nodeName}] não válido!`, success: false });
        }
      }
    }

    return new DataResult({ message: 'Elemento válido', success: true });
  }
}
