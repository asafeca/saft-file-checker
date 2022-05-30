import { IDataResult } from "../../commons/iresult";
export declare class WorkingDocuments {
    static isWorkingDocumentsValid({ workingNodes }: {
        workingNodes: NodeListOf<ChildNode>;
    }): IDataResult;
    private static findAttributeInTheNode;
}
