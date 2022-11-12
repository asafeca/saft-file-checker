import { LineCustomsInformation } from "../../../../common/LineCustomsInformation";
import { LineOrderReferences } from "../../../../common/LineOrderReferences";
import { LineProductSerialNumber } from "../../../../common/LineProductSerialNumber";
import { SAFTTaxBase } from "../../../../common/SAFTTaxBase";
export declare class StockMovementLine {
    lineNumber: string;
    orderReferences: LineOrderReferences;
    productCode: string;
    productDescrition: string;
    quantity: string;
    unitOfMeasure: string;
    unitPrice: string;
    description: string;
    productSerialNumber: LineProductSerialNumber;
    tax: SAFTTaxBase;
    taxExemptionReason: string;
    taxExemptionCode: string;
    settlementAmount: string;
    customsInformation: LineCustomsInformation;
}
