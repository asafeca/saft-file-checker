import { SaftAttributeModel } from "../../../../domain/models/HeaderAttributeModel";
export declare class CurrencyValidation {
    static isCurrencyValidation({ attributeList, currencyNodes }: {
        attributeList: Array<SaftAttributeModel>;
        currencyNodes: NodeListOf<ChildNode>;
    }): boolean;
    private static isAttributeFoundInNode;
    private static isCurrencyInTheNode;
}
