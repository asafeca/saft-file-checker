import { DataResult, IDataResult } from '../commons/iresult';
import { SaftAttributeList } from '../commons/saft_attributes_list';
import { SaftValidation } from '../commons/saft_validation';

export class TaxTableValidation {
  static isTaxTableValid({ nodeList }: { nodeList: NodeListOf<ChildNode> }): IDataResult {
    if (!(nodeList.length - 1 <= 0)) {
      const attributes = SaftAttributeList.TaxTableAttributes;

      // CHECK TAXTABLEATTRIBUTES
      const taxResult = SaftValidation.verifyAttributesInTheNodes({ attributes, nodeList });
      if (!taxResult.success) {
        return taxResult;
      }

      for (const nodeKey of Object.keys(nodeList)) {
        const currentNode = nodeList[nodeKey as any];
        if (currentNode.nodeName === 'TaxTableEntry') {
          const entryNodes = currentNode.childNodes;
          const entryAttributes = SaftAttributeList.TaxTableEntryAttributes;
          if (!(entryNodes.length - 1 <= 0)) {
            const entryResult = SaftValidation.verifyAttributesInTheNodes({
              attributes: entryAttributes,
              nodeList: entryNodes,
            });

            if (!entryResult.success) {
              return entryResult;
            }
          } else {
            return new DataResult({
              message: `Elemento inválido. [${currentNode.nodeName}] inválido`,
              success: false,
            });
          }
        }
      }
    } else {
      return new DataResult({ success: false, message: `Elemento inválido. [TaxTable]` });
    }

    return new DataResult({ success: true, message: 'Elemento válido' });
  }
}
