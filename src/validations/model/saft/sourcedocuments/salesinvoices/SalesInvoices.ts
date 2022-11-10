import { Invoice } from "./invoice/Invoice"

export class SalesInvoices {
    public numberOfEntries!: string
    public totalDebit!: string
    public totalCredit!: string
    public invoice!: Array<Invoice>

}