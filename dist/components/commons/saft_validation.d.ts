import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
export declare class SaftValidation {
    static isString<T>(value: T): Boolean;
    static checkHeaderAttributeList({ attributeList, childNode }: {
        attributeList: Array<SaftAttributeModel>;
        childNode: ChildNode;
    }): boolean;
    private static checkHeaderElement;
    private static checkCompanyAddressAttr;
    private static checkCompanyAddressAttrElement;
    childNodeChildrenMatch({ childNode, matchList }: {
        childNode: ChildNode;
        matchList: Array<SaftAttributeModel>;
    }): boolean;
    isElementValid({ element, childNode }: {
        element: SaftAttributeModel;
        childNode: ChildNode;
    }): boolean;
}
