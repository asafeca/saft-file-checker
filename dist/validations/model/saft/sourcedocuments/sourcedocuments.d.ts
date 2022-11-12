import { MovementOfGoods } from "./movementofgoods/MovementOfGoods";
import { SourceDocumentsPayments } from "./payments/SourceDocumentsPayments";
import { PurchaseInvoices } from "./purchaseinvoices/PurchaseInvoices";
import { SalesInvoices } from "./salesinvoices/SalesInvoices";
import { WorkingDocuments } from "./workingdocuments/WorkingDocuments";
export declare class SourceDocuments {
    salesInvoices: SalesInvoices;
    movementOfGoods: MovementOfGoods;
    workingDocuments: WorkingDocuments;
    payments: SourceDocumentsPayments;
    purchaseInvoices: PurchaseInvoices;
}
