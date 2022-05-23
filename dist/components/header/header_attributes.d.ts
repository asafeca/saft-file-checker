export interface IHeaderAttributes {
    AuditFileVersion: {
        type: string;
        isPresent: boolean;
    };
    CompanyID: {
        type: string;
        isPresent: boolean;
    };
    TaxRegistrationNumber: {
        type: string;
        isPresent: boolean;
    };
    TaxAccountingBasis: {
        type: string;
        isPresent: boolean;
    };
    CompanyName: {
        type: string;
        isPresent: boolean;
    };
    BusinessName: {
        type: String;
        isPresent: boolean;
    };
    CompanyAddress: {
        type: string;
        isPresent: boolean;
    };
    FiscalYear: {
        type: number;
        isPresent: boolean;
    };
    StartDate: {
        type: Date;
        isPresent: boolean;
    };
    EndDate: {
        type: Date;
        isPresent: boolean;
    };
    CurrencyCode: {
        type: string;
        isPresent: boolean;
    };
    DateCreated: {
        type: Date;
        isPresent: boolean;
    };
    TaxEntity: {
        type: string;
        isPresent: boolean;
    };
    ProductCompanyTaxID: {
        type: string;
        isPresent: boolean;
    };
    SoftwareValidationNumber: {
        type: string;
        isPresent: boolean;
    };
    ProductID: {
        type: string;
        isPresent: boolean;
    };
    ProductVersion: {
        type: string;
        isPresent: boolean;
    };
    Telephone: {
        type: string;
        isPresent: boolean;
    };
    Email: {
        type: string;
        isPresent: boolean;
    };
    Website: {
        type: string;
        isPresent: boolean;
    };
}
export declare class HeaderAttributes implements IHeaderAttributes {
    AuditFileVersion: {
        type: string;
        isPresent: boolean;
    };
    CompanyID: {
        type: string;
        isPresent: boolean;
    };
    TaxRegistrationNumber: {
        type: string;
        isPresent: boolean;
    };
    TaxAccountingBasis: {
        type: string;
        isPresent: boolean;
    };
    CompanyName: {
        type: string;
        isPresent: boolean;
    };
    BusinessName: {
        type: String;
        isPresent: boolean;
    };
    CompanyAddress: {
        type: string;
        isPresent: boolean;
    };
    FiscalYear: {
        type: number;
        isPresent: boolean;
    };
    StartDate: {
        type: Date;
        isPresent: boolean;
    };
    EndDate: {
        type: Date;
        isPresent: boolean;
    };
    CurrencyCode: {
        type: string;
        isPresent: boolean;
    };
    DateCreated: {
        type: Date;
        isPresent: boolean;
    };
    TaxEntity: {
        type: string;
        isPresent: boolean;
    };
    ProductCompanyTaxID: {
        type: string;
        isPresent: boolean;
    };
    SoftwareValidationNumber: {
        type: string;
        isPresent: boolean;
    };
    ProductID: {
        type: string;
        isPresent: boolean;
    };
    ProductVersion: {
        type: string;
        isPresent: boolean;
    };
    Telephone: {
        type: string;
        isPresent: boolean;
    };
    Email: {
        type: string;
        isPresent: boolean;
    };
    Website: {
        type: string;
        isPresent: boolean;
    };
    constructor(header: IHeaderAttributes);
}
