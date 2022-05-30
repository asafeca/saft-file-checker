import { IDataResult } from "../commons/iresult";
export declare class CustomerValidation {
    static isCustomerValid({ customerNodeList }: {
        customerNodeList: NodeListOf<ChildNode>;
    }): IDataResult;
    private static checkCustomerChildren;
    private static isAttributeInTheNode;
}
