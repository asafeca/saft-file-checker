import { IDataResult } from '../../../commons/iresult';
export declare class DocumentTotalsValidation {
    static isDocumentTotalsValid({ totalsNodes }: {
        totalsNodes: NodeListOf<ChildNode>;
    }): IDataResult;
    private static currencyExistsInTheNode;
}
