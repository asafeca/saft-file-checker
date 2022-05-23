import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";

export class SaftAttributeList{

    static CompanyAddressAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "BuildingNumber", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "StreetName", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "AddressDetail", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "City", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "PostalCode", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "Province", type:"string", isPresent : false}),
        new SaftAttributeModel({name: "Country", type:"string", isPresent : false})
        
        )

        static HeaderAttributes = new Array<SaftAttributeModel>(

            new SaftAttributeModel({name:"AuditFileVersion", isPresent:false, type:"string"}),
            new SaftAttributeModel({name:"TaxRegistrationNumber", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"TaxAccountingBasis", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"CompanyName", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"BusinessName", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"CompanyAddress", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"FiscalYear", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"StartDate", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"EndDate", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"CurrencyCode", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"DateCreated", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"TaxEntity", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"SoftwareValidationNumber", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"ProductID", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"Telephone", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"Email", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"Website", type:"string", isPresent:false}),
            new SaftAttributeModel({name:"ProductCompanyTaxID", type:"string", isPresent:false}),
                  
             );

    static MasterfilesElements = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "Customer", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Product", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "TaxTable", type:"string", isPresent:false}),
        )

    static CustomerAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"CustomerID",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"AccountID",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"CustomerTaxID",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"CompanyName",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"BillingAddress",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"ShipToAddress",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"SelfBillingIndicator",type:"string", isPresent:false})
    )


    static BillingAndShipToAddressAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"AddressDetail",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"City",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"PostalCode",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Province",type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Country",type:"string", isPresent:false}),
        
    )


    static ProductAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"ProductType", type:"string", isPresent:false }),
        new SaftAttributeModel({name:"ProductCode", type:"string", isPresent:false }),
        new SaftAttributeModel({name:"ProductGroup", type:"string", isPresent:false }),
        new SaftAttributeModel({name:"ProductDescription", type:"string", isPresent:false }),
        new SaftAttributeModel({name:"ProductNumberCode", type:"string", isPresent:false })
    )

    static TaxTableEntryAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"TaxType", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxCountryRegion", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxCode", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Description", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxPercentage", type:"string", isPresent:false})
    )

    static SourceDocumentsAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"SalesInvoices", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"WorkingDocuments", type:"string", isPresent:false}),

    )

    static SalesInvoicesAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"NumberOfEntries", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TotalDebit", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TotalCredit", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Invoice", type:"string", isPresent:false})
    )

    static InvoiceAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "InvoiceNo", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "DocumentStatus", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Hash", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "HashControl", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Period", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "InvoiceDate", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "InvoiceType", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "SpecialRegimes", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "SourceID", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "SystemEntryDate", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "CustomerID", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "ShipTo", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "ShipFrom", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "MovementStartTime", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Line", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "DocumentTotals", type:"string", isPresent:false}),

    )

    static DocumentTotalsAttributes = new Array(
        new SaftAttributeModel({name: "TaxPayable", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "NetTotal", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "GrossTotal", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Currency", type:"string", isPresent:false}),
    )


    static CurrencyAttributes = new Array(
        new SaftAttributeModel({name: "CurrencyCode", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "CurrencyAmount", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "ExchangeRate", type:"string", isPresent:false}),
    )


    static SpecialRegimesAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "SelfBillingIndicator", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "CashVATSchemeIndicator", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "ThirdPartiesBillingIndicator", type:"string", isPresent:false})
    )

    static ShipToAndShiFromAttributes= new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "DeliveryDate", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "Address", type:"string", isPresent:false}),

    )

    static ShipToAndShipFromAddressAttributes= new  Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"AddressDetail", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"City", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"PostalCode", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Country", type:"string", isPresent:false})

    )

    static LineAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"LineNumber", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"ProductCode", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"ProductDescription", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Quantity", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"UnitOfMeasure", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"UnitPrice", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Description", type:"string", isPresent:false}),
       // new SaftAttributeModel({name:"CreditAmount", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"Tax", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"SettlementAmount", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxExemptionReason", type:"string", isPresent:true}),
        new SaftAttributeModel({name:"TaxExemptionCode", type:"string", isPresent:true}),

    )

    static LineTaxAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({name:"TaxType", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxCountryRegion", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxCode", type:"string", isPresent:false}),
        new SaftAttributeModel({name:"TaxPercentage", type:"string", isPresent:false}),
    )

    static DocumentStatusAttributes= new Array<SaftAttributeModel>(
        new SaftAttributeModel({name: "InvoiceStatus", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "InvoiceStatusDate", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "SourceID", type:"string", isPresent:false}),
        new SaftAttributeModel({name: "SourceBilling", type:"string", isPresent:false}),
        
    )

    
    
   
}