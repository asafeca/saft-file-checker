import { IDataResult } from '../commons/iresult';
/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
export declare class SaftHeader {
  static isHeaderValid(nodeList: NodeListOf<ChildNode>): IDataResult;
}
