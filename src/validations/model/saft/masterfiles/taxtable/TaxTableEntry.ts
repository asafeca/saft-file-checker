export class TaxTableEntry {
    public taxType!: string  // SAFTTaxType
    public taxCountryRegion!: string
    public taxCode!: string // SAFTTaxCode
    public description!: string
    public taxExpirationDate!: string
    public taxPercentage!: string
    public taxAmount!: string
}