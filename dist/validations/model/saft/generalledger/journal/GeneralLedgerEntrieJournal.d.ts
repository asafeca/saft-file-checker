import { JournalTransaction } from "./transaction/JournalTransaction";
export declare class GeneralLedgerEntrieJournal {
    journalId: string;
    description: string;
    transaction: Array<JournalTransaction>;
}
