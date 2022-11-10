import { SAFTMasterFileCustomer } from "./customer/SAFTMasterFileCustomer";
import { GeneralLedgerAccounts } from "./generalledgeraccounts/GeneralLedgerAccounts";
import { SAFTMasterFileProduct } from "./product/SAFTMasterFileProduct";
import { SAFTMasterfileSupplier } from "./supplier/SAFTMasterfileSupplier";
import { TaxTable } from "./taxtable/TaxTable";

export class SAFTMasterFile {

    public generalLedgerAccounts!: GeneralLedgerAccounts
    public customer!: Array<SAFTMasterFileCustomer>
    public supplier!: Array<SAFTMasterfileSupplier>
    public product!: Array<SAFTMasterFileProduct>
    public taxTable!: TaxTable;

}