import { GeneralLedgerEntries } from "./generalledger/GeneralLedgerEntries"
import { SAFTHeader } from "./header/SAFTHeader"
import { SAFTMasterFile } from "./masterfiles/SAFTMasterFile"
import { SourceDocuments } from "./sourcedocuments/sourcedocuments"

export class FileModelSAFT {
    public generalLedgerEntries!: GeneralLedgerEntries
    public header!: SAFTHeader
    public masterFiles!: SAFTMasterFile
    public sourceDocuments!: SourceDocuments
}