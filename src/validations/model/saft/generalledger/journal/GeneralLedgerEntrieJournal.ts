import { JournalTransaction } from "./transaction/JournalTransaction"

export class GeneralLedgerEntrieJournal {
    public journalId!: string
    public description!: string
    public transaction!: Array<JournalTransaction>
}