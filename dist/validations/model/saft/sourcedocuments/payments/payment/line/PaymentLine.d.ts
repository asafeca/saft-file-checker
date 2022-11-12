import { LineTax } from "../../../../common/LineTax";
import { PaymentLineSourceDocument } from "./PaymentLineSourceDocument";
export declare class PaymentLine {
    lineNumber: string;
    sourceDocumentId: PaymentLineSourceDocument;
    settlementAmount: string;
    debitAmount: string;
    creditAmount: string;
    tax: LineTax;
    taxExemptionReason: string;
    taxExemptionCode: string;
}
