import { WithholdingTax } from "../../../common/WithholdingTax"
import { InvoiceBaseShipAddress } from "./children/InvoiceBaseShipAddress"
import { InvoiceDocumentStatus } from "./children/InvoiceDocumentStatus"
import { InvoiceSpecialRegimes } from "./children/InvoiceSpecialRegimes"
import { InvoiceLine } from "./children/line/InvoiceLine"
import { InvoiceDocumentTotals } from "./children/totals/InvoiceDocumentTotals"

export class Invoice {

    public invoiceNo!: string
    public documentStatus!: InvoiceDocumentStatus
    public hashControl!: string
    public period!: string
    public invoiceDate!: string
    public invoiceType!: string //SAFTInvoiceType
    public specialRegimes!: InvoiceSpecialRegimes
    public sourceId!: string
    public eacCode!: string
    public systemEntryDate!: string
    public transactionId!: string
    public customerId!: string
    public shipFrom!: InvoiceBaseShipAddress
    public shipTo!: InvoiceBaseShipAddress
    public movementEndTime!: string
    public movementStartTime!: string
    public line!: Array<InvoiceLine>
    public documentTotals!: InvoiceDocumentTotals
    public withholdingTax!: WithholdingTax

}