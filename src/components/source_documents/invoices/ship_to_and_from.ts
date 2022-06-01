import { SaftAttributeModel } from '../../../domain/models/HeaderAttributeModel';
import { DataResult, IDataResult } from '../../commons/iresult';
import { SaftAttributeList } from '../../commons/saft_attributes_list';

export class ShipToAndFromValidation {
  static shipToAndFromValid({
    attributeList,
    nodeList,
  }: {
    attributeList: SaftAttributeModel[];
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const shipKey of Object.keys(attributeList)) {
      const attribute = attributeList[shipKey as any];
      const result = this.attributeIsInTheNode({ element: attribute, nodeList });
      if (!result.success) {
        return result;
      }
    }

    return new DataResult({ message: 'Ficheiro valido', success: true });
  }

  private static attributeIsInTheNode({
    element,
    nodeList,
  }: {
    element: SaftAttributeModel;
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const nodeKey of Object.keys(nodeList)) {
      const shipNode = nodeList[nodeKey as any];

      if (element.getName() === shipNode.nodeName) {
        if (shipNode.nodeName === 'Address') {
          const addressNodes = shipNode.childNodes;

          const addressAttributes = SaftAttributeList.ShipToAndShipFromAddressAttributes;
          const result = this.shipToAndFromValid({ attributeList: addressAttributes, nodeList: addressNodes });
          if (!result.success) {
            return result;
          }
        }

        return new DataResult({ message: 'Ficheiro valido', success: true });
      }
    }

    return new DataResult({ message: `Ficheiro inválido. [${element.getName()}] não encontrado`, success: false });
  }
}
