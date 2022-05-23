
 export interface IHeaderAttributes{

    AuditFileVersion:{type:string, isPresent:boolean},
    CompanyID:{type:string, isPresent:boolean},
    TaxRegistrationNumber:{type:string, isPresent:boolean},
    TaxAccountingBasis:{type:string, isPresent: boolean}
    CompanyName:{type:string, isPresent:boolean},
    BusinessName:{type:String,isPresent: boolean}
    CompanyAddress:{type:string, isPresent: boolean}
    FiscalYear:{type:number, isPresent:boolean}
    StartDate:{type:Date, isPresent:boolean},
    EndDate:{type:Date, isPresent:boolean},
    CurrencyCode:{type:string,isPresent:boolean}
    DateCreated:{type:Date, isPresent:boolean}
    TaxEntity: {type:string, isPresent:boolean},
    ProductCompanyTaxID:{type:string, isPresent:boolean},
    SoftwareValidationNumber:{type:string, isPresent:boolean},
    ProductID:{type:string, isPresent:boolean},
    ProductVersion: {type:string, isPresent:boolean},
    Telephone:{type:string, isPresent:boolean},
    Email:{type:string, isPresent:boolean},
    Website:{type:string, isPresent:boolean}
}

export class HeaderAttributes implements IHeaderAttributes{
    AuditFileVersion: { type: string; isPresent: boolean }
    CompanyID: { type: string; isPresent: boolean }
    TaxRegistrationNumber: { type: string; isPresent: boolean }
    TaxAccountingBasis: { type: string; isPresent: boolean }
    CompanyName: { type: string; isPresent: boolean }
    BusinessName: { type: String; isPresent: boolean }
    CompanyAddress: { type: string; isPresent: boolean }
    FiscalYear: { type: number; isPresent: boolean }
    StartDate: { type: Date; isPresent: boolean }
    EndDate: { type: Date; isPresent: boolean }
    CurrencyCode: { type: string; isPresent: boolean }
    DateCreated: { type: Date; isPresent: boolean }
    TaxEntity: { type: string; isPresent: boolean }
    ProductCompanyTaxID: { type: string; isPresent: boolean }
    SoftwareValidationNumber: { type: string; isPresent: boolean }
    ProductID: { type: string; isPresent: boolean }
    ProductVersion: { type: string; isPresent: boolean }
    Telephone: { type: string; isPresent: boolean }
    Email: { type: string; isPresent: boolean }
    Website: { type: string; isPresent: boolean }

    constructor(header:IHeaderAttributes){

        this.AuditFileVersion = header.AuditFileVersion
        this.CompanyID = header.CompanyID;
        this.TaxRegistrationNumber = header.TaxRegistrationNumber;
        this.TaxAccountingBasis = header.TaxAccountingBasis;
        this.CompanyName = header.CompanyName;
        this.BusinessName = header.BusinessName;
        this.CompanyAddress = header.CompanyAddress;
        this.FiscalYear = header.FiscalYear;
        this.StartDate = header.StartDate;
        this.EndDate = header.EndDate;
        this.CurrencyCode = header.CurrencyCode;
        this.DateCreated = header.DateCreated;
        this.TaxEntity = header.TaxEntity;
        this.ProductCompanyTaxID = header.ProductCompanyTaxID;
        this.SoftwareValidationNumber = header.SoftwareValidationNumber;
        this.ProductID = header.ProductID;
        this.ProductVersion = header.ProductVersion;
        this.Telephone = header.Telephone;
        this.Email = header.Email;
        this.Website = header.Website;

    }
    
}







