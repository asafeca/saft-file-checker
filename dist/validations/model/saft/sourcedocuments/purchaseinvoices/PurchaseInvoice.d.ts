import { InvoiceReferences } from "../../common/InvoiceReferences";
import { WithholdingTax } from "../../common/WithholdingTax";
import { PurchaseDocumentTotlas } from "./PurchaseDocumentTotlas";
export declare class PurchaseInvoice {
    invoiceNo: string;
    references: InvoiceReferences;
    hash: string;
    sourceId: string;
    period: string;
    invoiceDate: string;
    purchaseType: string;
    supplierId: string;
    documentTotals: PurchaseDocumentTotlas;
    withholdingTax: WithholdingTax;
}
