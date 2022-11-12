import { SAFTSupplierBillingAddress } from "./children/SAFTSupplierBillingAddress";
import { SAFTSupplierShipFromAddress } from "./children/SAFTSupplierShipFromAddress";
export declare class SAFTMasterfileSupplier {
    supplierId: string;
    accountId: string;
    supplierTaxId: string;
    companyName: string;
    contact: string;
    billingAddress: SAFTSupplierBillingAddress;
    shipFromAddress: SAFTSupplierShipFromAddress;
    telefone: string;
    fax: string;
    email: string;
    website: string;
    selfBillingIndicator: string;
}
