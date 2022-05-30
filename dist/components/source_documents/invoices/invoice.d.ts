import { IDataResult } from "../../commons/iresult";
export declare class InvoiceValidation {
    static isInvoiceValid({ invoiceNodeList }: {
        invoiceNodeList: NodeListOf<ChildNode>;
    }): IDataResult;
    private static getCorrectAttributeList;
    private static getInvoiceType;
}
