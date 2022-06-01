import { SaftAttributeModel } from '../../../domain/models/HeaderAttributeModel';
import { DataResult, IDataResult } from '../../commons/iresult';
import { SaftAttributeList } from '../../commons/saft_attributes_list';
import { SaftValidation } from '../../commons/saft_validation';

export class WorkDocLineValidation {
  static isLineValid({
    nodeList,
    attributes,
  }: {
    nodeList: NodeListOf<ChildNode>;
    attributes: SaftAttributeModel[];
  }): IDataResult {
    for (const nodeKey of Object.keys(nodeList)) {
      const currentNode = nodeList[nodeKey as any];
      if (currentNode.nodeName === 'Tax') {
        const taxNodes = currentNode.childNodes;
        const taxAttributes = SaftAttributeList.WorkDocTaxAttributes;
        if (!(taxNodes.length - 1 <= 0)) {
          const taxResult = SaftValidation.verifyAttributesInTheNodes({
            nodeList: taxNodes,
            attributes: taxAttributes,
          });

          if (!taxResult.success) {
            return taxResult;
          }
        } else {
          return new DataResult({ success: false, message: `Èlemento [Tax] inválido` });
        }
      }
    }

    return new DataResult({ success: true, message: 'Elemento válido' });
  }
}
