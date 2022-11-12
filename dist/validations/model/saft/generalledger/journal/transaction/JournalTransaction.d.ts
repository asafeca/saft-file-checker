import { TransactionLine } from "./transactionline/TransactionLine";
export declare class JournalTransaction {
    period: string;
    transactionDate: string;
    sourceId: string;
    description: string;
    docArchivaNumber: string;
    transactionType: string;
    glPostingDate: string;
    customerId: string;
    supplierId: string;
    line: Array<TransactionLine>;
}
