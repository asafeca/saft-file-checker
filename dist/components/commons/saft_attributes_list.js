"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftAttributeList = void 0;
var HeaderAttributeModel_1 = require("../../domain/models/HeaderAttributeModel");
var SaftAttributeList = /** @class */ (function () {
    function SaftAttributeList() {
    }
    SaftAttributeList.CompanyAddressAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'BuildingNumber', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'StreetName', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'AddressDetail', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'City', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'PostalCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Province', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Country', type: 'string', isParent: false }),
    ];
    SaftAttributeList.HeaderAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'AuditFileVersion', isParent: false, type: 'string' }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxRegistrationNumber', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxAccountingBasis', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CompanyName', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'BusinessName', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CompanyAddress', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'FiscalYear', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'StartDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'EndDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CurrencyCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DateCreated', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxEntity', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SoftwareValidationNumber', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Telephone', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Email', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Website', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductCompanyTaxID', type: 'string', isParent: false }),
    ];
    SaftAttributeList.MasterfilesElements = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Customer', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Product', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxTable', type: 'string', isParent: true }),
    ];
    SaftAttributeList.TaxTableAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({
            name: 'TaxTableEntry',
            type: 'string',
            isParent: true,
        }),
    ];
    SaftAttributeList.CustomerAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CustomerID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'AccountID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CustomerTaxID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CompanyName', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'BillingAddress', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ShipToAddress', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SelfBillingIndicator', type: 'string', isParent: false }),
    ];
    SaftAttributeList.BillingAndShipToAddressAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'AddressDetail', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'City', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'PostalCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Province', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Country', type: 'string', isParent: false }),
    ];
    SaftAttributeList.ProductAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductGroup', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductDescription', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductNumberCode', type: 'string', isParent: false }),
    ];
    SaftAttributeList.TaxTableEntryAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCountryRegion', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Description', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPercentage', type: 'decimal', isParent: false }),
    ];
    SaftAttributeList.SourceDocumentsAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SalesInvoices', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkingDocuments', type: 'string', isParent: true }),
    ];
    SaftAttributeList.SalesInvoicesAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'NumberOfEntries', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TotalDebit', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TotalCredit', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Invoice', type: 'string', isParent: true }),
    ];
    SaftAttributeList.InvoiceAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'InvoiceNo', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DocumentStatus', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Hash', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'HashControl', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Period', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'InvoiceDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'InvoiceType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SpecialRegimes', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SystemEntryDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CustomerID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ShipTo', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ShipFrom', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'MovementStartTime', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Line', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DocumentTotals', type: 'string', isParent: true }),
    ];
    SaftAttributeList.DocumentTotalsSimpleAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPayable', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'NetTotal', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'GrossTotal', type: 'string', isParent: false }),
    ];
    SaftAttributeList.DocumentTotalsWithCurrencyAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPayable', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'NetTotal', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'GrossTotal', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Currency', type: 'string', isParent: true }),
    ];
    SaftAttributeList.CurrencyAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CurrencyCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CurrencyAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ExchangeRate', type: 'decimal', isParent: false }),
    ];
    SaftAttributeList.SpecialRegimesAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SelfBillingIndicator', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CashVATSchemeIndicator', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ThirdPartiesBillingIndicator', type: 'int', isParent: false }),
    ];
    SaftAttributeList.ShipToAndShiFromAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DeliveryDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Address', type: 'string', isParent: true }),
    ];
    SaftAttributeList.ShipToAndShipFromAddressAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'AddressDetail', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'City', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'PostalCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Country', type: 'string', isParent: false }),
    ];
    SaftAttributeList.FTLineAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'LineNumber', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductDescription', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Quantity', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'UnitOfMeasure', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'UnitPrice', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Description', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CreditAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Tax', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SettlementAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionReason', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionCode', type: 'string', isParent: true }),
    ];
    SaftAttributeList.NCLineAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'LineNumber', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductDescription', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Quantity', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'UnitOfMeasure', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'UnitPrice', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Description', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DebitAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Tax', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SettlementAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionReason', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionCode', type: 'string', isParent: false }),
    ];
    SaftAttributeList.LineTaxAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCountryRegion', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPercentage', type: 'decimal', isParent: false }),
    ];
    SaftAttributeList.DocumentStatusAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'InvoiceStatus', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'InvoiceStatusDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceBilling', type: 'string', isParent: false }),
    ];
    SaftAttributeList.WorkingDocumentsAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'NumberOfEntries', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TotalDebit', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TotalCredit', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkDocument', type: 'string', isParent: true }),
    ];
    SaftAttributeList.WorkDocumentAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DocumentNumber', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DocumentStatus', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Hash', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'HashControl', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Period', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SystemEntryDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CustomerID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Line', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'DocumentTotals', type: 'string', isParent: true }),
    ];
    SaftAttributeList.WorkDocDocumentStatusAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkStatus', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'WorkStatusDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceID', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SourceBilling', type: 'string', isParent: false }),
    ];
    SaftAttributeList.WorkDocLineAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'LineNumber', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'ProductDescription', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Quantity', type: 'int', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'UnitPrice', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPointDate', type: 'date', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Description', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'CreditAmount', type: 'decimal', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'Tax', type: 'string', isParent: true }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionReason', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxExemptionCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'SettlementAmount', type: 'decimal', isParent: false }),
    ];
    SaftAttributeList.WorkDocTaxAttributes = [
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxType', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCountryRegion', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxCode', type: 'string', isParent: false }),
        new HeaderAttributeModel_1.SaftAttributeModel({ name: 'TaxPercentage', type: 'decimal', isParent: false }),
    ];
    return SaftAttributeList;
}());
exports.SaftAttributeList = SaftAttributeList;
