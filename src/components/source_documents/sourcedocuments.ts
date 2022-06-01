import { DataResult, IDataResult } from '../commons/iresult';
import { SaftAttributeList } from '../commons/saft_attributes_list';
import { SaftValidation } from '../commons/saft_validation';
import { SalesInvoicesValidation } from './sales_invoices/sales_invoices';
import { WorkingDocuments } from './working_documents/working_documents';

export class SourceDocuments {
  static isSourceDocumentsValid({ sourceNodeList }: { sourceNodeList: NodeListOf<ChildNode> }): IDataResult {
    if (!(sourceNodeList.length - 1 <= 0)) {
      // CHECK SOURCEDOCUMENTS ATTRIBUTES
      const sourceAttributes = SaftAttributeList.SourceDocumentsAttributes;
      const sourceResult = SaftValidation.verifyAttributesInTheNodes({
        attributes: sourceAttributes,
        nodeList: sourceNodeList,
      });

      if (!sourceResult.success) {
        return sourceResult;
      }

      for (const nodeKey of Object.keys(sourceNodeList)) {
        const currentNode = sourceNodeList[nodeKey as any];
        if (currentNode.nodeName === 'SalesInvoices') {
          const salesInvoicesNodeList = currentNode.childNodes;

          const salesResult = SalesInvoicesValidation.isSalesInvoicesValid({ salesInvoicesNodeList });
          if (!salesResult.success) {
            return salesResult;
          }
        } else if (currentNode.nodeName === 'WorkingDocuments') {
          const result = WorkingDocuments.isWorkingDocumentsValid({ workingNodes: currentNode.childNodes });

          if (!result.success) {
            return result;
          }
        } else if (currentNode.nodeName === 'Line') {
          const lineNodes = currentNode.childNodes;
        }
      }
    } else {
      return new DataResult({ success: false, message: 'Elemento [SourceDocument] inválido' });
    }

    return new DataResult({ success: true, message: 'Elemento válido' });
  }
}
