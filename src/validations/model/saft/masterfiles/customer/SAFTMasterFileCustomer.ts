import { SAFTCustomerAddress } from "./children/SAFTCustomerAddress"
import { SAFTCustomerShipToAddress } from "./children/SAFTCustomerShipToAddress"

export class SAFTMasterFileCustomer {
    public customerId!: string
    public accountId!: string
    public customerTaxId!: string
    public companyName!: string
    public contact!: string
    public billingAddress!: SAFTCustomerAddress
    public shipToAddress!: SAFTCustomerShipToAddress
    public telefone!: string
    public fax!: string
    public email!: string
    public website!: string
    public selfBillingIndicator!: string
}