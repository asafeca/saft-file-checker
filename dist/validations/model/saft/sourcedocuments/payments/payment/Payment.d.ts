import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals";
import { WithholdingTax } from "../../../common/WithholdingTax";
import { PaymentLine } from "./line/PaymentLine";
import { PaymentDocumentStatus } from "./PaymentDocumentStatus";
import { PaymentMethod } from "./PaymentMethod";
export declare class Payment {
    paymentRefNo: string;
    transactionDate: string;
    paymentType: string;
    description: string;
    systemId: string;
    documentStatus: PaymentDocumentStatus;
    paymentMethod: PaymentMethod;
    sourceId: string;
    systemEntryDate: string;
    customerId: string;
    line: Array<PaymentLine>;
    documentTotals: SAFTDocumentTotals;
    withholdingTax: WithholdingTax;
}
