import { SAFTDocumentTotals } from "../../../../../common/SAFTDocumentTotals";
import { DocumentTotalsPayment } from "./DocumentTotalsPayment";
import { DocumentTotalsSettlement } from "./DocumentTotalsSettlement";
export declare class InvoiceDocumentTotals extends SAFTDocumentTotals {
    settlement: DocumentTotalsSettlement;
    payment: DocumentTotalsPayment;
}
