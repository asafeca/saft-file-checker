import { SAFTHeaderCompanyAddress } from "./SAFTHeaderCompanyAddress";
export declare class SAFTHeader {
    auditFileVersion: string;
    companyId: string;
    taxRegistrationNumber: string;
    taxAccountingBasis: string;
    companyName: string;
    businessName: string;
    companyAddress: SAFTHeaderCompanyAddress;
    fiscalYear: string;
    startDate: string;
    endDate: string;
    currencyCode: string;
    dateCreated: string;
    taxEntity: string;
    productCompanyTaxID: string;
    softwareValidationNumber: string;
    productID: string;
    productVersion: string;
    headerComment: string;
    telephone: string;
    fax: string;
    email: string;
    website: string;
}
