import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals"
import { InvoiceLine } from "../../salesinvoices/invoice/children/line/InvoiceLine"
import { DocumentStatus } from "./DocumentStatus"

export class WorkDocument {
    public documentNumber!: string
    public documentStatus!: DocumentStatus
    public hash!: string
    public hashDocument!: string
    public period!: string
    public workDate!: string
    public workType!: string  // SAFTWorkType
    public sourceId!: string
    public eacCode!: string
    public systemEntryDate!: string
    public transactionId!: string
    public customerId!: string
    public line!: Array<InvoiceLine>
    public documentTotals!: SAFTDocumentTotals
}