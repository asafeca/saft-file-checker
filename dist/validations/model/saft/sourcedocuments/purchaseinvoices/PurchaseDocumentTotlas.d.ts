import { DocumentTotalsCurrency } from "../../common/DocumentTotalsCurrency";
import { DocumentTotalsDeductible } from "../../common/DocumentTotalsDeductible";
export declare class PurchaseDocumentTotlas {
    taxPayable: string;
    netTotal: string;
    grossTotal: string;
    deductible: DocumentTotalsDeductible;
    currency: DocumentTotalsCurrency;
}
