import { SAFTHeaderCompanyAddress } from "./SAFTHeaderCompanyAddress"

export class SAFTHeader {
    public auditFileVersion!: string
    public companyId!: string
    public taxRegistrationNumber!: string
    public taxAccountingBasis!: string //SAFTHeaderTaxAccountingBasis ENUM
    public companyName!: string
    public businessName!: string
    public companyAddress!: SAFTHeaderCompanyAddress
    public fiscalYear!: string
    public startDate!: string
    public endDate!: string
    public currencyCode!: string
    public dateCreated!: string
    public taxEntity!: string
    public productCompanyTaxID!: string
    public softwareValidationNumber!: string
    public productID!: string
    public productVersion!: string
    public headerComment!: string
    public telephone!: string
    public fax!: string
    public email!: string
    public website!: string
}