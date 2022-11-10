import { SAFTDocumentTotals } from "../../../../../common/SAFTDocumentTotals"
import { DocumentTotalsPayment } from "./DocumentTotalsPayment"
import { DocumentTotalsSettlement } from "./DocumentTotalsSettlement"

export class InvoiceDocumentTotals extends SAFTDocumentTotals {
    public settlement!: DocumentTotalsSettlement
    public payment!: DocumentTotalsPayment

}