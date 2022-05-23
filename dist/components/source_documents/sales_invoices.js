"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInvoices = void 0;
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
            if (!(this.attributeExistsInTheNode({ element: saleInvoiceAttr, nodeList: nodeList }))) {
                return false;
            }
        }
        return true;
    };
    SalesInvoices.attributeExistsInTheNode = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
            if (nodeList[nodeIndex].nodeName !== "#text") {
                if (nodeList[nodeIndex].nodeName === element.getName()) {
                    if (nodeList[nodeIndex].nodeName === "Invoice") {
                        if (!(nodeList[nodeIndex].childNodes.length - 1 <= 0)) {
                            var invoiceNodes = nodeList[nodeIndex].childNodes;
                            if (!(invoice_1.InvoiceValidation.isInvoiceValid({ nodeList: invoiceNodes }))) {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };
    return SalesInvoices;
}());
exports.SalesInvoices = SalesInvoices;
