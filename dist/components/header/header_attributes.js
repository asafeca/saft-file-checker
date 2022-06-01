'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.HeaderAttributes = void 0;
var HeaderAttributes = /** @class */ (function () {
  function HeaderAttributes(header) {
    this.AuditFileVersion = header.AuditFileVersion;
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
  return HeaderAttributes;
})();
exports.HeaderAttributes = HeaderAttributes;
