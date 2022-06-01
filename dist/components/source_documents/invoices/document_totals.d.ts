import { SaftAttributeModel } from '../../../domain/models/HeaderAttributeModel';
export declare class DocumentTotalsValidation {
  static isDocumentTotalsValid({
    totalsAttributes,
    totalsNodes,
  }: {
    totalsAttributes: Array<SaftAttributeModel>;
    totalsNodes: NodeListOf<ChildNode>;
  }): boolean;
  private static attributeIsInTheNode;
}
