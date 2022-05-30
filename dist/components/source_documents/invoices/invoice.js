"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceValidation = void 0;
var HeaderAttributeModel_1 = require("../../../domain/models/HeaderAttributeModel");
var iresult_1 = require("../../commons/iresult");
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var saft_validation_1 = require("../../commons/saft_validation");
var document_totals_1 = require("./document_totals/document_totals");
var line_1 = require("./line/line");
var InvoiceValidation = /** @class */ (function () {
    function InvoiceValidation() {
    }
    InvoiceValidation.isInvoiceValid = function (_a) {
        var invoiceNodeList = _a.invoiceNodeList;
        if (!(invoiceNodeList.length - 1 <= 0)) {
            // CHECK INVOICE NODES
            var invoiceAttributes = saft_attributes_list_1.SaftAttributeList.InvoiceAttributes;
            var invoiceResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ attributes: invoiceAttributes, nodeList: invoiceNodeList });
            if (!(invoiceResult.success)) {
                return invoiceResult;
            }
            for (var _i = 0, _b = Object.keys(invoiceNodeList); _i < _b.length; _i++) {
                var nodeKey = _b[_i];
                var currentNode = invoiceNodeList[nodeKey];
                if (currentNode.nodeName !== "#text" && currentNode.nodeName !== undefined) {
                    if (currentNode.nodeName === "DocumentStatus" || currentNode.nodeName === "SpecialRegimes") {
                        var nodeList = currentNode.childNodes;
                        var attributes = this.getCorrectAttributeList(currentNode.nodeName);
                        var nodeResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ attributes: attributes, nodeList: nodeList });
                        if (!nodeResult.success) {
                            return nodeResult;
                        }
                    }
                    else if (currentNode.nodeName === "ShipTo" || currentNode.nodeName === "ShipFrom") {
                        var shipNodes = currentNode.childNodes;
                        var shipAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShiFromAttributes;
                        var shipResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ nodeList: shipNodes, attributes: shipAttributes });
                        if (!shipResult.success) {
                            return shipResult;
                        }
                        for (var _c = 0, _d = Object.keys(shipNodes); _c < _d.length; _c++) {
                            var shipKey = _d[_c];
                            var currentShipNode = shipNodes[shipKey];
                            if (currentShipNode.nodeName === "Address") {
                                var shipAddressNodes = currentShipNode.childNodes;
                                var shipAddressAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShipFromAddressAttributes;
                                if (!(shipAddressNodes.length - 1 <= 0)) {
                                    var shipAddressResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                                        nodeList: shipAddressNodes, attributes: shipAddressAttributes
                                    });
                                    if (!shipAddressResult.success) {
                                        return shipAddressResult;
                                    }
                                }
                                else {
                                    return new iresult_1.DataResult({ success: false, message: "Elemento ".concat(currentShipNode.nodeName, " inv\u00E1lido") });
                                }
                            }
                        }
                    }
                    else if (currentNode.nodeName === "Line") {
                        var lineNodes = currentNode.childNodes;
                        var invoiceType = this.getInvoiceType({ invoiceNodeList: invoiceNodeList });
                        var invoiceResult_1 = line_1.LineValidation.isLineValid({ lineNodes: lineNodes, invoiceType: invoiceType });
                        if (!invoiceResult_1.success) {
                            return invoiceResult_1;
                        }
                    }
                    else if (currentNode.nodeName === "DocumentTotals") {
                        var totalsNodes = currentNode.childNodes;
                        var totalsResult = document_totals_1.DocumentTotalsValidation.isDocumentTotalsValid({ totalsNodes: totalsNodes });
                        if (!totalsResult.success) {
                            return totalsResult;
                        }
                    }
                }
            }
            return new iresult_1.DataResult({ message: "Elemento válido", success: true });
        }
        else {
            return new iresult_1.DataResult({ message: "Elemento [Invoice] inv\u00E1lido", success: false });
        }
    };
    InvoiceValidation.getCorrectAttributeList = function (attribute) {
        switch (attribute) {
            case "DocumentStatus":
                return saft_attributes_list_1.SaftAttributeList.DocumentStatusAttributes;
            case "SpecialRegimes":
                return saft_attributes_list_1.SaftAttributeList.SpecialRegimesAttributes;
            default: return new Array();
        }
    };
    InvoiceValidation.getInvoiceType = function (_a) {
        var invoiceNodeList = _a.invoiceNodeList;
        for (var _i = 0, _b = Object.keys(invoiceNodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentInvoice = invoiceNodeList[nodeKey];
            if (currentInvoice.nodeName === "InvoiceType") {
                var name_1 = currentInvoice.textContent !== null ? currentInvoice.textContent : "UNKNOWN";
                return new HeaderAttributeModel_1.SaftAttributeModel({ name: name_1, isParent: false, type: "string" });
            }
        }
        return new HeaderAttributeModel_1.SaftAttributeModel({ name: "UNKNOWN", isParent: false, type: "string" });
    };
    return InvoiceValidation;
}());
exports.InvoiceValidation = InvoiceValidation;
