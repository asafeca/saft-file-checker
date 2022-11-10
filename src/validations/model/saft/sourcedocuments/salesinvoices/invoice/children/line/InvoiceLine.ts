import { LineCustomsInformation } from "../../../../../common/LineCustomsInformation"
import { LineOrderReferences } from "../../../../../common/LineOrderReferences"
import { LineProductSerialNumber } from "../../../../../common/LineProductSerialNumber"
import { LineReferences } from "../../../../../common/LineReferences"
import { LineTax } from "../../../../../common/LineTax"

export class InvoiceLine {
    public lineNumber!: string
    public orderReferences!: LineOrderReferences
    public productCode!: string
    public productDescrition!: string
    public quantity!: string
    public unitOfMeasure!: string
    public unitPrice!: string
    public taxBase!: string
    public taxPointDate!: string
    public references!: LineReferences
    public description!: string
    public productSerialNumber!: LineProductSerialNumber
    public debitAmount!: string
    public creditAmount!: string
    public tax!: LineTax
    public taxExemptionReason!: string
    public taxExemptionCode!: string
    public settlementAmount!: string
    public customsInformation!: LineCustomsInformation

}