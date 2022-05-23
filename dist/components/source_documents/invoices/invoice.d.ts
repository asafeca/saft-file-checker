export declare class InvoiceValidation {
    static isInvoiceValid({ nodeList }: {
        nodeList: NodeListOf<ChildNode>;
    }): boolean;
    private static isAttributeInTheNode;
    private static invoiceChildMatch;
    private static checkInvoiceChidrenAndSiblings;
    private static findAttributeOnNode;
    private static matchAttributeListWithNodeList;
    private static isElementFoundInTheNode;
}
