export class GeneralLedgerAccount {
    public accountId!: string
    public accountDescription!: string
    public openingDebitBalance!: string
    public openingCreditBalance!: string
    public closingDebitBalance!: string
    public closingCreditBalance!: string
    public groupingCategory!: string // SAFTGroupingCategory
    public groupingCode!: string
}