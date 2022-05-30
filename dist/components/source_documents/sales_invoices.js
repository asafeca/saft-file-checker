"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInvoices = void 0;
var iresult_1 = require("../commons/iresult");
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var invoice_1 = require("./invoices/invoice");
var SalesInvoices = /** @class */ (function () {
    function SalesInvoices() {
    }
    SalesInvoices.isSalesInvoicesValid = function (_a) {
        var nodeList = _a.nodeList;
        var salesInvoicesAttributes = saft_attributes_list_1.SaftAttributeList.SalesInvoicesAttributes;
        for (var salesAttrIndex = 0; salesAttrIndex < salesInvoicesAttributes.length; salesAttrIndex++) {
            var saleInvoiceAttr = salesInvoicesAttributes[salesAttrIndex];
            // LET'S VALIDATE EACH SALESINVOICES ATTRIBUTE
            var result = this.attributeExistsInTheNode({ element: saleInvoiceAttr, nodeList: nodeList });
            if (!(result.success)) {
                return result;
            }
        }
        return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
    };
    SalesInvoices.attributeExistsInTheNode = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
            if (nodeList[nodeIndex].nodeName !== "#text") {
                if (nodeList[nodeIndex].nodeName === element.getName()) {
                    if (nodeList[nodeIndex].nodeName === "Invoice") {
                        if (!(nodeList[nodeIndex].childNodes.length - 1 <= 0)) {
                            var invoiceNodes = nodeList[nodeIndex].childNodes;
                            var result = invoice_1.InvoiceValidation.isInvoiceValid({ nodeList: invoiceNodes });
                            if (!(result.success)) {
                                return result;
                            }
                        }
                        else {
                            return new iresult_1.DataResult({
                                message: "Ficheiro Inv\u00E1lido. [".concat(nodeList[nodeIndex].nodeName, "] n\u00E3o v\u00E1lido!"),
                                success: false
                            });
                        }
                    }
                }
            }
        }
        return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
    };
    return SalesInvoices;
}());
exports.SalesInvoices = SalesInvoices;
