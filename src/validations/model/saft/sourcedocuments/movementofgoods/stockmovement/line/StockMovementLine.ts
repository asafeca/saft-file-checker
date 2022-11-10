import { LineCustomsInformation } from "../../../../common/LineCustomsInformation"
import { LineOrderReferences } from "../../../../common/LineOrderReferences"
import { LineProductSerialNumber } from "../../../../common/LineProductSerialNumber"
import { SAFTTaxBase } from "../../../../common/SAFTTaxBase"

export class StockMovementLine {
    public lineNumber!: string
    public orderReferences!: LineOrderReferences
    public productCode!: string
    public productDescrition!: string
    public quantity!: string
    public unitOfMeasure!: string
    public unitPrice!: string
    public description!: string
    public productSerialNumber!: LineProductSerialNumber
    public tax!: SAFTTaxBase
    public taxExemptionReason!: string
    public taxExemptionCode!: string
    public settlementAmount!: string
    public customsInformation!: LineCustomsInformation

}