import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
export declare class TaxValidation {
    static isTaxValid({ taxAttributeList, taxNodes }: {
        taxAttributeList: Array<SaftAttributeModel>;
        taxNodes: NodeListOf<ChildNode>;
    }): boolean;
    private static taxChildValid;
}
