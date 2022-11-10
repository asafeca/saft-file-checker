import { SAFTDocumentTotals } from "../../../common/SAFTDocumentTotals"
import { WithholdingTax } from "../../../common/WithholdingTax"
import { PaymentLine } from "./line/PaymentLine"
import { PaymentDocumentStatus } from "./PaymentDocumentStatus"
import { PaymentMethod } from "./PaymentMethod"

export class Payment {
    public paymentRefNo!: string
    public transactionDate!: string
    public paymentType!: string // SAFTPaymentType
    public description!: string
    public systemId!: string
    public documentStatus!: PaymentDocumentStatus
    public paymentMethod!: PaymentMethod
    public sourceId!: string
    public systemEntryDate!: string
    public customerId!: string
    public line!: Array<PaymentLine>
    public documentTotals!: SAFTDocumentTotals
    public withholdingTax!: WithholdingTax
}