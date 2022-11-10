import { LineTax } from "../../../../common/LineTax"
import { PaymentLineSourceDocument } from "./PaymentLineSourceDocument"

export class PaymentLine {
    public lineNumber!: string
    public sourceDocumentId!: PaymentLineSourceDocument
    public settlementAmount!: string
    public debitAmount!: string
    public creditAmount!: string
    public tax!: LineTax
    public taxExemptionReason!: string
    public taxExemptionCode!: string

}