import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
import { IDataResult } from "../../../commons/iresult";
export declare class TaxValidation {
    static isTaxValid({ taxAttributeList, taxNodes }: {
        taxAttributeList: Array<SaftAttributeModel>;
        taxNodes: NodeListOf<ChildNode>;
    }): IDataResult;
    private static taxChildValid;
}
