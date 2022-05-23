import { SaftAttributeModel } from "../../../domain/models/HeaderAttributeModel";
export declare class ShipToAndFromValidation {
    static shipToAndFromValid({ attributeList, nodeList }: {
        attributeList: Array<SaftAttributeModel>;
        nodeList: NodeListOf<ChildNode>;
    }): boolean;
    private static attributeIsInTheNode;
    private static isAddressValid;
}
