import { DocumentTotalsCurrency } from "../../common/DocumentTotalsCurrency"
import { DocumentTotalsDeductible } from "../../common/DocumentTotalsDeductible"

export class PurchaseDocumentTotlas {
    public taxPayable!: string
    public netTotal!: string
    public grossTotal!: string
    public deductible!: DocumentTotalsDeductible
    public currency!: DocumentTotalsCurrency
}