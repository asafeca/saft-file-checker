"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceDocuments = void 0;
var iresult_1 = require("../commons/iresult");
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var saft_validation_1 = require("../commons/saft_validation");
var sales_invoices_1 = require("./sales_invoices/sales_invoices");
var working_documents_1 = require("./working_documents/working_documents");
var SourceDocuments = /** @class */ (function () {
    function SourceDocuments() {
    }
    SourceDocuments.isSourceDocumentsValid = function (_a) {
        var sourceNodeList = _a.sourceNodeList;
        if (!(sourceNodeList.length - 1 <= 0)) {
            // CHECK SOURCEDOCUMENTS ATTRIBUTES
            var sourceAttributes = saft_attributes_list_1.SaftAttributeList.SourceDocumentsAttributes;
            var sourceResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ attributes: sourceAttributes, nodeList: sourceNodeList });
            if (!sourceResult.success) {
                return sourceResult;
            }
            for (var _i = 0, _b = Object.keys(sourceNodeList); _i < _b.length; _i++) {
                var nodeKey = _b[_i];
                var currentNode = sourceNodeList[nodeKey];
                if (currentNode.nodeName === "SalesInvoices") {
                    var salesInvoicesNodeList = currentNode.childNodes;
                    var salesResult = sales_invoices_1.SalesInvoicesValidation.isSalesInvoicesValid({ salesInvoicesNodeList: salesInvoicesNodeList });
                    if (!salesResult.success) {
                        return salesResult;
                    }
                }
                else if (currentNode.nodeName === "WorkingDocuments") {
                    var result = working_documents_1.WorkingDocuments.isWorkingDocumentsValid({ workingNodes: currentNode.childNodes });
                    if (!(result.success)) {
                        return result;
                    }
                }
                else if (currentNode.nodeName === "Line") {
                    var lineNodes = currentNode.childNodes;
                    // const lineAttributes = 
                }
            }
        }
        else {
            return new iresult_1.DataResult({ success: false, message: "Elemento [SourceDocument] inválido" });
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido" });
    };
    return SourceDocuments;
}());
exports.SourceDocuments = SourceDocuments;
