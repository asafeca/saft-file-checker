import { SaftAttributeModel } from '../../../domain/models/HeaderAttributeModel';
import { DataResult, IDataResult } from '../../commons/iresult';
import { SaftAttributeList } from '../../commons/saft_attributes_list';
import { SaftValidation } from '../../commons/saft_validation';
import { DocumentTotalsValidation } from './document_totals/document_totals';
import { LineValidation } from './line/line';

export class InvoiceValidation {
  static isInvoiceValid({ invoiceNodeList }: { invoiceNodeList: NodeListOf<ChildNode> }): IDataResult {
    if (!(invoiceNodeList.length - 1 <= 0)) {
      // CHECK INVOICE NODES

      const invoiceAttributes = SaftAttributeList.InvoiceAttributes;
      const invoiceResult = SaftValidation.verifyAttributesInTheNodes({
        attributes: invoiceAttributes,
        nodeList: invoiceNodeList,
      });

      if (!invoiceResult.success) {
        return invoiceResult;
      }

      for (const nodeKey of Object.keys(invoiceNodeList)) {
        const currentNode = invoiceNodeList[nodeKey as any];
        if (currentNode.nodeName !== '#text' && currentNode.nodeName !== undefined) {
          if (currentNode.nodeName === 'DocumentStatus' || currentNode.nodeName === 'SpecialRegimes') {
            const nodeList = currentNode.childNodes;
            const attributes = this.getCorrectAttributeList(currentNode.nodeName);
            const nodeResult = SaftValidation.verifyAttributesInTheNodes({ attributes, nodeList });
            if (!nodeResult.success) {
              return nodeResult;
            }
          } else if (currentNode.nodeName === 'ShipTo' || currentNode.nodeName === 'ShipFrom') {
            const shipNodes = currentNode.childNodes;
            const shipAttributes = SaftAttributeList.ShipToAndShiFromAttributes;
            const shipResult = SaftValidation.verifyAttributesInTheNodes({
              nodeList: shipNodes,
              attributes: shipAttributes,
            });
            if (!shipResult.success) {
              return shipResult;
            }

            for (const shipKey of Object.keys(shipNodes)) {
              const currentShipNode = shipNodes[shipKey as any];

              if (currentShipNode.nodeName === 'Address') {
                const shipAddressNodes = currentShipNode.childNodes;
                const shipAddressAttributes = SaftAttributeList.ShipToAndShipFromAddressAttributes;
                if (!(shipAddressNodes.length - 1 <= 0)) {
                  const shipAddressResult = SaftValidation.verifyAttributesInTheNodes({
                    nodeList: shipAddressNodes,
                    attributes: shipAddressAttributes,
                  });

                  if (!shipAddressResult.success) {
                    return shipAddressResult;
                  }
                } else {
                  return new DataResult({ success: false, message: `Elemento ${currentShipNode.nodeName} inválido` });
                }
              }
            }
          } else if (currentNode.nodeName === 'Line') {
            const lineNodes = currentNode.childNodes;

            const invoiceType = this.getInvoiceType({ invoiceNodeList });

            const lineResult = LineValidation.isLineValid({ lineNodes, invoiceType });

            if (!lineResult.success) {
              return lineResult;
            }
          } else if (currentNode.nodeName === 'DocumentTotals') {
            const totalsNodes = currentNode.childNodes;
            const totalsResult = DocumentTotalsValidation.isDocumentTotalsValid({ totalsNodes });

            if (!totalsResult.success) {
              return totalsResult;
            }
          }
        }
      }

      return new DataResult({ message: 'Elemento válido', success: true });
    } else {
      return new DataResult({ message: `Elemento [Invoice] inválido`, success: false });
    }
  }

  private static getCorrectAttributeList(attribute: string): SaftAttributeModel[] {
    switch (attribute) {
      case 'DocumentStatus':
        return SaftAttributeList.DocumentStatusAttributes;
      case 'SpecialRegimes':
        return SaftAttributeList.SpecialRegimesAttributes;

      default:
        return new Array<SaftAttributeModel>();
    }
  }

  private static getInvoiceType({ invoiceNodeList }: { invoiceNodeList: NodeListOf<ChildNode> }): SaftAttributeModel {
    for (const nodeKey of Object.keys(invoiceNodeList)) {
      const currentInvoice = invoiceNodeList[nodeKey as any];

      if (currentInvoice.nodeName === 'InvoiceType') {
        const name = currentInvoice.textContent !== null ? currentInvoice.textContent : 'UNKNOWN';

        return new SaftAttributeModel({ name, isParent: false, type: 'string' });
      }
    }

    return new SaftAttributeModel({ name: 'UNKNOWN', isParent: false, type: 'string' });
  }
}
