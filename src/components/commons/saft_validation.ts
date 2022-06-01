import { SaftAttributeModel } from '../../domain/models/HeaderAttributeModel';
import { TaxExemption } from '../source_documents/invoices/tax_exemptions';
import { ContentTypeValidation } from './content_type_validation';
import { DataResult, IDataResult } from './iresult';
import { SaftAttributeList } from './saft_attributes_list';

export class SaftValidation {
  static isString<T>(value: T): boolean {
    return (
      (typeof value === 'string' || typeof value === 'number') && value !== null && value !== undefined && value !== ''
    );
  }

  static checkHeaderAttributeList({
    attributeList,
    nodeList,
  }: {
    attributeList: SaftAttributeModel[];
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const keys of Object.keys(attributeList)) {
      const attribute = attributeList[keys as any];

      const result = this.checkHeaderElement({ element: attribute, nodeList });

      if (!result.success) {
        return new DataResult({ message: `Element ${attribute.getName()} Inválido`, success: false });
      }
    }

    return new DataResult({ message: 'Ficheiro válido', success: true });
  }

  private static checkHeaderElement({
    element,
    nodeList,
  }: {
    element: SaftAttributeModel;
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const key of Object.keys(nodeList)) {
      const currentNode = nodeList[key as any];
      if (currentNode.nodeName !== undefined && currentNode.nodeName !== '#text')
        if (element.getName() === currentNode.nodeName) {
          if (element.getName() === 'CompanyAddress') {
            const addressNodes = currentNode.childNodes;
            const result = this.checkCompanyAddressAttr(addressNodes);

            if (!result.success) {
              return new DataResult({ success: false, message: `${element.getName()} não encontrado` });
            }
          }
          const isContentValid = ContentTypeValidation.isContentValid({
            typeModel: element,
            content: currentNode.textContent !== null ? currentNode.textContent : '',
          });
          if (!isContentValid) {
            return new DataResult({ message: `Elemento ${element.getName()} com valor inválido`, success: false });
          }
          return new DataResult({ success: true, message: 'Ficheiro válido' });
        }
    }

    return new DataResult({ success: false, message: `Ficheiro Inválido. ${element.getName()} não encontrado` });
  }

  private static checkCompanyAddressAttr(nodeList: NodeListOf<ChildNode>): IDataResult {
    if (!(nodeList.length - 1 <= 0)) {
      const addressAttributes = SaftAttributeList.CompanyAddressAttributes;

      for (const attrKey of Object.keys(addressAttributes)) {
        const attribute = addressAttributes[attrKey as any];

        const result = this.checkCompanyAddressAttrElement({ attribute, nodeList });
        if (!result.success) {
          return result;
        }
      }
    }

    return new DataResult({ success: true, message: 'Ficheiro válido' });
  }

  private static checkCompanyAddressAttrElement({
    attribute,
    nodeList,
  }: {
    attribute: SaftAttributeModel;
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const nodeKey of Object.keys(nodeList)) {
      const currentNode = nodeList[nodeKey as any];

      if (currentNode.nodeName === attribute.getName()) {
        return new DataResult({ success: true, message: `Ficheiro válido.` });
      }
    }

    return new DataResult({ success: false, message: `Ficheiro Inválido. ${attribute.getName()} não encontrado` });
  }

  childNodeChildrenMatch({
    childNode,
    matchList,
  }: {
    childNode: ChildNode;
    matchList: SaftAttributeModel[];
  }): IDataResult {
    for (const attrKey of Object.keys(matchList)) {
      const taxEntry = matchList[attrKey as any];
      if (!this.isElementValid({ element: taxEntry, childNode })) {
        return new DataResult({ success: false, message: `Ficheiro inválido. [${taxEntry.getName()}] não encontrado` });
      }
    }

    return new DataResult({ message: 'Ficheiro valido', success: true });
  }

  isElementValid({ element, childNode }: { element: SaftAttributeModel; childNode: ChildNode }): IDataResult {
    const nodeList = childNode.childNodes;
    for (const nodeKey of Object.keys(nodeList)) {
      const currentNode = nodeList[nodeKey as any];
      if (element.getName() === currentNode.nodeName) {
        return new DataResult({ message: 'Ficheiro valido', success: true });
      }
    }

    return new DataResult({ success: false, message: `Ficheiro inválido. [${element.getName()}] não encontrado` });
  }

  static verifyAttributesInTheNodes({
    attributes,
    nodeList,
  }: {
    attributes: SaftAttributeModel[];
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    for (const attrKey of Object.keys(attributes)) {
      const attribute = attributes[attrKey as any];
      const result = this.isAttributeInTheNode({ attribute, nodeList });

      if (!result.success) {
        return result;
      }
    }

    return new DataResult({ success: true, message: 'Elemento válido!' });
  }

  private static isAttributeInTheNode({
    attribute,
    nodeList,
  }: {
    attribute: SaftAttributeModel;
    nodeList: NodeListOf<ChildNode>;
  }): IDataResult {
    if (attribute.getName() === 'TaxExemptionReason' || attribute.getName() === 'TaxExemptionCode') {
      return TaxExemption.validateExemptions(nodeList);
    } else {
      for (const nodeKey of Object.keys(nodeList)) {
        const currentNode = nodeList[nodeKey as any];

        if (attribute.getName() === currentNode.nodeName) {
          if (!attribute.getIsParent()) {
            const isContentValid = ContentTypeValidation.isContentValid({
              typeModel: attribute,
              content: currentNode.textContent !== null ? currentNode.textContent : '',
            });
            if (!isContentValid) {
              return new DataResult({ message: `Elemento ${attribute.getName()} com valor inválido`, success: false });
            }
          }

          return new DataResult({ success: true, message: 'Elemento válido!' });
        }
      }
    }

    return new DataResult({ success: false, message: `Elemento inválidoo [${attribute.getName()}] não encontrado!` });
  }
}
