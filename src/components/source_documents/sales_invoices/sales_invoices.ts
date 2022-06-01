import { DataResult, IDataResult } from '../../commons/iresult';
import { SaftAttributeList } from '../../commons/saft_attributes_list';
import { SaftValidation } from '../../commons/saft_validation';
import { InvoiceValidation } from '../invoices/invoice';

export class SalesInvoicesValidation {
  static isSalesInvoicesValid({
    salesInvoicesNodeList,
  }: {
    salesInvoicesNodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    // CHECK SALES INVOICES ATTRIBUTES
    const SalesInvoicesAttributes = SaftAttributeList.SalesInvoicesAttributes;
    const salesResult = SaftValidation.verifyAttributesInTheNodes({
      attributes: SalesInvoicesAttributes,
      nodeList: salesInvoicesNodeList,
    });

    if (!salesResult.success) {
      return salesResult;
    }

    for (const nodeKey of Object.keys(salesInvoicesNodeList)) {
      const currentNode = salesInvoicesNodeList[nodeKey as any];
      if (currentNode.nodeName !== '#text' && currentNode.nodeName !== undefined) {
        if (currentNode.nodeName === 'Invoice') {
          const invoiceNodeList = currentNode.childNodes;
          const invoiceResult = InvoiceValidation.isInvoiceValid({ invoiceNodeList });
          if (!invoiceResult.success) {
            return invoiceResult;
          }
        }
      }
    }

    return new DataResult({ success: true, message: 'Elemento válido' });
  }
}
