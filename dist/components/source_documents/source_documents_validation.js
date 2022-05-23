"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceDocumentsValidation = void 0;
var sales_invoices_1 = require("./sales_invoices");
var SourceDocumentsValidation = /** @class */ (function () {
    function SourceDocumentsValidation() {
    }
    SourceDocumentsValidation.prototype.childNodeChildrenMatch = function (_a) {
        var childNode = _a.childNode, matchList = _a.matchList;
        for (var k = 0; k < matchList.length; k++) {
            var entry = matchList[k];
            if (!(this.isElementValid({ element: entry, childNode: childNode }))) {
                return false;
            }
        }
        return true;
    };
    SourceDocumentsValidation.prototype.isElementValid = function (_a) {
        var element = _a.element, childNode = _a.childNode;
        for (var x = 0; x < childNode.childNodes.length; x++) {
            if (element.getName() === childNode.childNodes[x].nodeName) {
                var sourceDocumentElement = childNode.childNodes[x];
                if (sourceDocumentElement.nodeName === "SalesInvoices") {
                    // IF DOES NOT HAVE VALID CHILDREN
                    if (!(sourceDocumentElement.childNodes.length - 1 <= 0)) {
                        var salesInvoicesNodes = sourceDocumentElement.childNodes;
                        if (!(sales_invoices_1.SalesInvoices.isSalesInvoicesValid({ nodeList: salesInvoicesNodes }))) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return SourceDocumentsValidation;
}());
exports.SourceDocumentsValidation = SourceDocumentsValidation;
