'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InvoiceValidation = void 0;
var saft_attributes_list_1 = require('../commons/saft_attributes_list');
var InvoiceValidation = /** @class */ (function () {
  function InvoiceValidation() {}
  InvoiceValidation.isInvoiceValid = function (_a) {
    var _this = this;
    var invoiceNodes = _a.invoiceNodes;
    var invoiceAttributes = saft_attributes_list_1.SaftAttributeList.InvoiceAttributes;
    invoiceAttributes.forEach(function (invoiceAttr) {
      if (!_this.invoiceChildMatch({ elementMatch: invoiceAttr, invoiceNodes: invoiceNodes })) {
        return false;
      }
    });
    return true;
  };
  InvoiceValidation.invoiceChildMatch = function (_a) {
    var elementMatch = _a.elementMatch,
      invoiceNodes = _a.invoiceNodes;
    for (var index = 0; index < invoiceNodes.childNodes.length; index++) {
      var currentInvoiceNode = invoiceNodes.childNodes[index];
      if (currentInvoiceNode.nodeName === elementMatch.getName()) {
        return true;
      }
    }
    return false;
  };
  return InvoiceValidation;
})();
exports.InvoiceValidation = InvoiceValidation;
