import { GeneralLedgerEntries } from "./generalledger/GeneralLedgerEntries";
import { SAFTHeader } from "./header/SAFTHeader";
import { SAFTMasterFile } from "./masterfiles/SAFTMasterFile";
import { SourceDocuments } from "./sourcedocuments/sourcedocuments";
export declare class FileModelSAFT {
    generalLedgerEntries: GeneralLedgerEntries;
    header: SAFTHeader;
    masterFiles: SAFTMasterFile;
    sourceDocuments: SourceDocuments;
}
