import { Payment } from "./payment/Payment"

export class SourceDocumentsPayments {
    public numberOfEntries!: string
    public totalDebit!: string
    public totalCredit!: string
    public payment!: Array<Payment>
}