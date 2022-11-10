import { MovementOfGoods } from "./movementofgoods/MovementOfGoods"
import { SourceDocumentsPayments } from "./payments/SourceDocumentsPayments"
import { PurchaseInvoices } from "./purchaseinvoices/PurchaseInvoices"
import { SalesInvoices } from "./salesinvoices/SalesInvoices"
import { WorkingDocuments } from "./workingdocuments/WorkingDocuments"

export class SourceDocuments {
    public salesInvoices!: SalesInvoices
    public movementOfGoods!: MovementOfGoods
    public workingDocuments!: WorkingDocuments
    public payments!: SourceDocumentsPayments
    public purchaseInvoices!: PurchaseInvoices
}