import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";
import { IDataResult } from "./iresult";
export declare class SaftValidation {
    static isString<T>(value: T): Boolean;
    static checkHeaderAttributeList({ attributeList, nodeList }: {
        attributeList: Array<SaftAttributeModel>;
        nodeList: NodeListOf<ChildNode>;
    }): IDataResult;
    private static checkHeaderElement;
    private static checkCompanyAddressAttr;
    private static checkCompanyAddressAttrElement;
    childNodeChildrenMatch({ childNode, matchList }: {
        childNode: ChildNode;
        matchList: Array<SaftAttributeModel>;
    }): IDataResult;
    isElementValid({ element, childNode }: {
        element: SaftAttributeModel;
        childNode: ChildNode;
    }): IDataResult;
    static verifyAttributesInTheNodes({ attributes, nodeList }: {
        attributes: Array<SaftAttributeModel>;
        nodeList: NodeListOf<ChildNode>;
    }): IDataResult;
    private static isAttributeInTheNode;
}
