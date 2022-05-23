import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
export declare class LineValidation {
    static isLineValid({ attributeList, lineNodes }: {
        attributeList: Array<SaftAttributeModel>;
        lineNodes: NodeListOf<ChildNode>;
    }): boolean;
    private static lineChildrenValid;
}
