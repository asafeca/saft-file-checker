import { TransactionLine } from "./transactionline/TransactionLine"

export class JournalTransaction {
    public period!: string
    public transactionDate!: string
    public sourceId!: string
    public description!: string
    public docArchivaNumber!: string
    public transactionType!: string // SAFTTransactionType
    public glPostingDate!: string
    public customerId!: string
    public supplierId!: string
    public line!: Array<TransactionLine>
}