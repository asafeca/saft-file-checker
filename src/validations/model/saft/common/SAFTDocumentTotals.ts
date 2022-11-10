import { DocumentTotalsCurrency } from "./DocumentTotalsCurrency"

export class SAFTDocumentTotals {
    public taxPayable!: string
    public netTotal!: string
    public grossTotal!: string
    public currency!: DocumentTotalsCurrency
}