import { WithholdingTax } from "../../../common/WithholdingTax";
import { InvoiceBaseShipAddress } from "./children/InvoiceBaseShipAddress";
import { InvoiceDocumentStatus } from "./children/InvoiceDocumentStatus";
import { InvoiceSpecialRegimes } from "./children/InvoiceSpecialRegimes";
import { InvoiceLine } from "./children/line/InvoiceLine";
import { InvoiceDocumentTotals } from "./children/totals/InvoiceDocumentTotals";
export declare class Invoice {
    invoiceNo: string;
    documentStatus: InvoiceDocumentStatus;
    hashControl: string;
    period: string;
    invoiceDate: string;
    invoiceType: string;
    specialRegimes: InvoiceSpecialRegimes;
    sourceId: string;
    eacCode: string;
    systemEntryDate: string;
    transactionId: string;
    customerId: string;
    shipFrom: InvoiceBaseShipAddress;
    shipTo: InvoiceBaseShipAddress;
    movementEndTime: string;
    movementStartTime: string;
    line: Array<InvoiceLine>;
    documentTotals: InvoiceDocumentTotals;
    withholdingTax: WithholdingTax;
}
