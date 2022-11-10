import { DocumentTotalsCurrency } from "./DocumentTotalsCurrency"

export class DocumentTotalsDeductible {
    public taxBase!: string
    public deductibleAmount!: string
    public deductiblePercentage!: string
    public deductibleTaxType!: string  // SAFTDeductibleTaxType

}