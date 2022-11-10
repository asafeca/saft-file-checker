import { InvoiceReferences } from "../../common/InvoiceReferences"
import { WithholdingTax } from "../../common/WithholdingTax"
import { PaymentDocumentTotals } from "../payments/payment/PaymentDocumentTotals"
import { PurchaseDocumentTotlas } from "./PurchaseDocumentTotlas"

export class PurchaseInvoice {
    public invoiceNo!: string
    public references!: InvoiceReferences
    public hash!: string
    public sourceId!: string
    public period!: string
    public invoiceDate!: string
    public purchaseType!: string // SAFTPurchaseType
    public supplierId!: string
    public documentTotals!: PurchaseDocumentTotlas
    public withholdingTax!: WithholdingTax
}