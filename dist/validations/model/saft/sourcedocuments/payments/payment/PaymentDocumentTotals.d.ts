import { DocumentTotalsCurrency } from "../../../common/DocumentTotalsCurrency";
import { PaymentDocumentTotalsSettlement } from "./PaymentDocumentTotalsSettlement";
export declare class PaymentDocumentTotals {
    taxPayable: string;
    netTotal: string;
    grossTotal: string;
    settlement: PaymentDocumentTotalsSettlement;
    currency: DocumentTotalsCurrency;
}
