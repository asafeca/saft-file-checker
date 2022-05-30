import { SaftAttributeModel } from "../../domain/models/HeaderAttributeModel";

export class SaftAttributeList {

    static CompanyAddressAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "BuildingNumber", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "StreetName", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "AddressDetail", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "City", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "PostalCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Province", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Country", type: "string", isParent: false })

    )

    static HeaderAttributes = new Array<SaftAttributeModel>(

        new SaftAttributeModel({ name: "AuditFileVersion", isParent: false, type: "string" }),
        new SaftAttributeModel({ name: "TaxRegistrationNumber", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxAccountingBasis", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CompanyName", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "BusinessName", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CompanyAddress", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "FiscalYear", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "StartDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "EndDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "CurrencyCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "DateCreated", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "TaxEntity", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SoftwareValidationNumber", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Telephone", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Email", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Website", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductCompanyTaxID", type: "string", isParent: false }),

    );

    static MasterfilesElements = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "Customer", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "Product", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "TaxTable", type: "string", isParent: true }),
    )

    static TaxTableAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({
            name: "TaxTableEntry", type: "string", isParent: true
        }))

    static CustomerAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "CustomerID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "AccountID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CustomerTaxID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CompanyName", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "BillingAddress", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "ShipToAddress", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "SelfBillingIndicator", type: "string", isParent: false })
    )


    static BillingAndShipToAddressAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "AddressDetail", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "City", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "PostalCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Province", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Country", type: "string", isParent: false }),

    )


    static ProductAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "ProductType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductGroup", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductDescription", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductNumberCode", type: "string", isParent: false })
    )

    static TaxTableEntryAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "TaxType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCountryRegion", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Description", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxPercentage", type: "decimal", isParent: false })
    )

    static SourceDocumentsAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "SalesInvoices", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "WorkingDocuments", type: "string", isParent: true }),

    )

    static SalesInvoicesAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "NumberOfEntries", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "TotalDebit", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "TotalCredit", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Invoice", type: "string", isParent: true })
    )

    static InvoiceAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "InvoiceNo", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "DocumentStatus", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Hash", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "HashControl", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Period", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "InvoiceDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "InvoiceType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SpecialRegimes", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "SourceID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SystemEntryDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "CustomerID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ShipTo", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "ShipFrom", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "MovementStartTime", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "Line", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "DocumentTotals", type: "string", isParent: true }),

    )

    static DocumentTotalsSimpleAttributes = new Array(
        new SaftAttributeModel({ name: "TaxPayable", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "NetTotal", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "GrossTotal", type: "string", isParent: false })
    )

    static DocumentTotalsWithCurrencyAttributes = new Array(
        new SaftAttributeModel({ name: "TaxPayable", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "NetTotal", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "GrossTotal", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Currency", type: "string", isParent: true }),
    )


    static CurrencyAttributes = new Array(
        new SaftAttributeModel({ name: "CurrencyCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CurrencyAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "ExchangeRate", type: "decimal", isParent: false }),
    )


    static SpecialRegimesAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "SelfBillingIndicator", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "CashVATSchemeIndicator", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "ThirdPartiesBillingIndicator", type: "int", isParent: false })
    )

    static ShipToAndShiFromAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "DeliveryDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "Address", type: "string", isParent: true }),

    )

    static ShipToAndShipFromAddressAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "AddressDetail", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "City", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "PostalCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Country", type: "string", isParent: false })

    )

    static FTLineAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "LineNumber", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "ProductCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductDescription", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Quantity", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "UnitOfMeasure", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "UnitPrice", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Description", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CreditAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Tax", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "SettlementAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "TaxExemptionReason", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "TaxExemptionCode", type: "string", isParent: true }),

    )


    static NCLineAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "LineNumber", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "ProductCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductDescription", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Quantity", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "UnitOfMeasure", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "UnitPrice", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Description", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "DebitAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Tax", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "SettlementAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "TaxExemptionReason", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxExemptionCode", type: "string", isParent: false }),

    )

    static LineTaxAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "TaxType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCountryRegion", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxPercentage", type: "decimal", isParent: false }),
    )

    static DocumentStatusAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "InvoiceStatus", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "InvoiceStatusDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "SourceID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SourceBilling", type: "string", isParent: false }),

    )


    static WorkingDocumentsAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "NumberOfEntries", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "TotalDebit", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "TotalCredit", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "WorkDocument", type: "string", isParent: true }),

    )

    static WorkDocumentAttributes = new Array<SaftAttributeModel>(

        new SaftAttributeModel(

            { name: "DocumentNumber", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "DocumentStatus", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "Hash", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "HashControl", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Period", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "WorkDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "WorkType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SourceID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SystemEntryDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "CustomerID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Line", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "DocumentTotals", type: "string", isParent: true }),

    )

    static WorkDocDocumentStatusAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "WorkStatus", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "WorkStatusDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "SourceID", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SourceBilling", type: "string", isParent: false }),

    )

    static WorkDocLineAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "LineNumber", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "ProductCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "ProductDescription", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "Quantity", type: "int", isParent: false }),
        new SaftAttributeModel({ name: "UnitPrice", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "TaxPointDate", type: "date", isParent: false }),
        new SaftAttributeModel({ name: "Description", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "CreditAmount", type: "decimal", isParent: false }),
        new SaftAttributeModel({ name: "Tax", type: "string", isParent: true }),
        new SaftAttributeModel({ name: "TaxExemptionReason", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxExemptionCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "SettlementAmount", type: "decimal", isParent: false }),
    )


    static WorkDocTaxAttributes = new Array<SaftAttributeModel>(
        new SaftAttributeModel({ name: "TaxType", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCountryRegion", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxCode", type: "string", isParent: false }),
        new SaftAttributeModel({ name: "TaxPercentage", type: "decimal", isParent: false }),

    )

}