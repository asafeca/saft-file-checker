import { SAFTSupplierBillingAddress } from "./children/SAFTSupplierBillingAddress"
import { SAFTSupplierShipFromAddress } from "./children/SAFTSupplierShipFromAddress"

export class SAFTMasterfileSupplier {
    public supplierId!: string
    public accountId!: string
    public supplierTaxId!: string
    public companyName!: string
    public contact!: string
    public billingAddress!: SAFTSupplierBillingAddress
    public shipFromAddress!: SAFTSupplierShipFromAddress
    public telefone!: string
    public fax!: string
    public email!: string
    public website!: string
    public selfBillingIndicator!: string

}