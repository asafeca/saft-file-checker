import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals";
import { InvoiceLine } from "../../salesinvoices/invoice/children/line/InvoiceLine";
import { DocumentStatus } from "./DocumentStatus";
export declare class WorkDocument {
    documentNumber: string;
    documentStatus: DocumentStatus;
    hash: string;
    hashDocument: string;
    period: string;
    workDate: string;
    workType: string;
    sourceId: string;
    eacCode: string;
    systemEntryDate: string;
    transactionId: string;
    customerId: string;
    line: Array<InvoiceLine>;
    documentTotals: SAFTDocumentTotals;
}
