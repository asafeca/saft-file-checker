import { SAFTMasterFileCustomer } from "./customer/SAFTMasterFileCustomer";
import { GeneralLedgerAccounts } from "./generalledgeraccounts/GeneralLedgerAccounts";
import { SAFTMasterFileProduct } from "./product/SAFTMasterFileProduct";
import { SAFTMasterfileSupplier } from "./supplier/SAFTMasterfileSupplier";
import { TaxTable } from "./taxtable/TaxTable";
export declare class SAFTMasterFile {
    generalLedgerAccounts: GeneralLedgerAccounts;
    customer: Array<SAFTMasterFileCustomer>;
    supplier: Array<SAFTMasterfileSupplier>;
    product: Array<SAFTMasterFileProduct>;
    taxTable: TaxTable;
}
