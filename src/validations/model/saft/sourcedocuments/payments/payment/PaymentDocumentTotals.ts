import { DocumentTotalsCurrency } from "../../../common/DocumentTotalsCurrency";
import { PaymentDocumentTotalsSettlement } from "./PaymentDocumentTotalsSettlement";

export class PaymentDocumentTotals {
    public taxPayable!: string;
    public netTotal!: string;
    public grossTotal!: string;
    public settlement!: PaymentDocumentTotalsSettlement
    public currency!: DocumentTotalsCurrency
}