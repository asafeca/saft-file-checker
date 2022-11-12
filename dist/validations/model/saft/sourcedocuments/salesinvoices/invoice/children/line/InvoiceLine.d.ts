import { LineCustomsInformation } from "../../../../../common/LineCustomsInformation";
import { LineOrderReferences } from "../../../../../common/LineOrderReferences";
import { LineProductSerialNumber } from "../../../../../common/LineProductSerialNumber";
import { LineReferences } from "../../../../../common/LineReferences";
import { LineTax } from "../../../../../common/LineTax";
export declare class InvoiceLine {
    lineNumber: string;
    orderReferences: LineOrderReferences;
    productCode: string;
    productDescrition: string;
    quantity: string;
    unitOfMeasure: string;
    unitPrice: string;
    taxBase: string;
    taxPointDate: string;
    references: LineReferences;
    description: string;
    productSerialNumber: LineProductSerialNumber;
    debitAmount: string;
    creditAmount: string;
    tax: LineTax;
    taxExemptionReason: string;
    taxExemptionCode: string;
    settlementAmount: string;
    customsInformation: LineCustomsInformation;
}
