import { SaftAttributeModel } from '../../../../domain/models/HeaderAttributeModel';
import { IDataResult } from '../../../commons/iresult';
export declare class LineValidation {
  static isLineValid({
    lineNodes,
    invoiceType,
  }: {
    lineNodes: NodeListOf<ChildNode>;
    invoiceType: SaftAttributeModel;
  }): IDataResult;
}
