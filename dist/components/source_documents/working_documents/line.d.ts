import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
import { IDataResult } from "../../commons/iresult";
export declare class WorkDocLineValidation {
    static isLineValid({ nodeList, attributes }: {
        nodeList: NodeListOf<ChildNode>;
        attributes: Array<SaftAttributeModel>;
    }): IDataResult;
}
