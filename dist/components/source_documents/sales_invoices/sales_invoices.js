"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInvoicesValidation = void 0;
var iresult_1 = require("../../commons/iresult");
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var saft_validation_1 = require("../../commons/saft_validation");
var invoice_1 = require("../invoices/invoice");
var SalesInvoicesValidation = /** @class */ (function () {
    function SalesInvoicesValidation() {
    }
    SalesInvoicesValidation.isSalesInvoicesValid = function (_a) {
        var salesInvoicesNodeList = _a.salesInvoicesNodeList;
        // CHECK SALES INVOICES ATTRIBUTES
        var SalesInvoicesAttributes = saft_attributes_list_1.SaftAttributeList.SalesInvoicesAttributes;
        var salesResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            attributes: SalesInvoicesAttributes,
            nodeList: salesInvoicesNodeList,
        });
        if (!salesResult.success) {
            return salesResult;
        }
        for (var _i = 0, _b = Object.keys(salesInvoicesNodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = salesInvoicesNodeList[nodeKey];
            if (currentNode.nodeName !== '#text' && currentNode.nodeName !== undefined) {
                if (currentNode.nodeName === 'Invoice') {
                    var invoiceNodeList = currentNode.childNodes;
                    var invoiceResult = invoice_1.InvoiceValidation.isInvoiceValid({ invoiceNodeList: invoiceNodeList });
                    if (!invoiceResult.success) {
                        return invoiceResult;
                    }
                }
            }
        }
        return new iresult_1.DataResult({ success: true, message: 'Elemento válido' });
    };
    return SalesInvoicesValidation;
}());
exports.SalesInvoicesValidation = SalesInvoicesValidation;
