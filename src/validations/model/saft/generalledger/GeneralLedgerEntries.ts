import { GeneralLedgerEntrieJournal } from "./journal/GeneralLedgerEntrieJournal"

export class GeneralLedgerEntries {
    private numberOfEntries!: string
    private totalDebit!: string
    private totalCredit!: string
    private journal!: Array<GeneralLedgerEntrieJournal>
}