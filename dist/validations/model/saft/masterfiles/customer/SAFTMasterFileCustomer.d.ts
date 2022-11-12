import { SAFTCustomerAddress } from "./children/SAFTCustomerAddress";
import { SAFTCustomerShipToAddress } from "./children/SAFTCustomerShipToAddress";
export declare class SAFTMasterFileCustomer {
    customerId: string;
    accountId: string;
    customerTaxId: string;
    companyName: string;
    contact: string;
    billingAddress: SAFTCustomerAddress;
    shipToAddress: SAFTCustomerShipToAddress;
    telefone: string;
    fax: string;
    email: string;
    website: string;
    selfBillingIndicator: string;
}
