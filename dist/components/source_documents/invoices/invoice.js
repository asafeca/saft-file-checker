"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceValidation = void 0;
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var document_totals_1 = require("./document_totals/document_totals");
var line_1 = require("./line/line");
var ship_to_and_from_1 = require("./ship_to_and_from");
var tax_exemptions_1 = require("./tax_exemptions");
var InvoiceValidation = /** @class */ (function () {
    function InvoiceValidation() {
    }
    InvoiceValidation.isInvoiceValid = function (_a) {
        var nodeList = _a.nodeList;
        var invoiceAttributes = saft_attributes_list_1.SaftAttributeList.InvoiceAttributes;
        for (var attrIndex = 0; attrIndex < invoiceAttributes.length; attrIndex++) {
            var attribute = invoiceAttributes[attrIndex];
            // FIRST FIND THE ATTRIBUTE IN THE NODES
            if (!(this.isAttributeInTheNode({ elementMatch: attribute, invoiceNodes: nodeList }))) {
                console.log(attribute);
                return false;
            }
            // CHECK IF THE ATTRIBUTES EXIST
            if (!(this.invoiceChildMatch({ elementMatch: attribute, invoiceNodes: nodeList }))) {
                return false;
            }
        }
        return true;
    };
    InvoiceValidation.isAttributeInTheNode = function (_a) {
        var elementMatch = _a.elementMatch, invoiceNodes = _a.invoiceNodes;
        for (var nodeIndex = 0; nodeIndex < invoiceNodes.length; nodeIndex++) {
            var nodeElement = invoiceNodes[nodeIndex];
            if (nodeElement.nodeName == elementMatch.getName()) {
                return true;
            }
        }
        return false;
    };
    InvoiceValidation.invoiceChildMatch = function (_a) {
        var elementMatch = _a.elementMatch, invoiceNodes = _a.invoiceNodes;
        for (var invoiceIndex = 0; invoiceIndex < invoiceNodes.length; invoiceIndex++) {
            var currentInvoiceNode = invoiceNodes[invoiceIndex];
            if (currentInvoiceNode.nodeName === elementMatch.getName()) {
                if (currentInvoiceNode.nodeName === "DocumentStatus") {
                    var statusAttributes = saft_attributes_list_1.SaftAttributeList.DocumentStatusAttributes;
                    var docStatusNodes = currentInvoiceNode.childNodes;
                    if (!(docStatusNodes.length - 1 <= 0)) {
                        if (!(this.matchAttributeListWithNodeList({ attributeList: statusAttributes, nodeList: docStatusNodes }))) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else if (currentInvoiceNode.nodeName === "SpecialRegimes") {
                    var regimeNodes = currentInvoiceNode.childNodes;
                    var regimesAttributes = saft_attributes_list_1.SaftAttributeList.SpecialRegimesAttributes;
                    if (!(regimeNodes.length - 1 <= 0)) {
                        if (!(this.matchAttributeListWithNodeList({ attributeList: regimesAttributes, nodeList: regimeNodes }))) {
                            console.log("regimes invalid");
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                if (currentInvoiceNode.nodeName === "ShipTo" || currentInvoiceNode.nodeName === "ShipFrom") {
                    // FIRST VALIDATE ALL NODES
                    var shipTo_FromNodes = currentInvoiceNode.childNodes;
                    var shipTo_FromAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShiFromAttributes;
                    if (!(shipTo_FromNodes.length - 1 <= 0)) {
                        if (!(ship_to_and_from_1.ShipToAndFromValidation.shipToAndFromValid({ attributeList: shipTo_FromAttributes, nodeList: shipTo_FromNodes }))) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                if (currentInvoiceNode.nodeName === "Line") {
                    var lineNodes = currentInvoiceNode.childNodes;
                    var lineAttributes = saft_attributes_list_1.SaftAttributeList.LineAttributes;
                    if (!(lineNodes.length - 1 <= 0)) {
                        if (!(line_1.LineValidation.isLineValid({ attributeList: lineAttributes, lineNodes: lineNodes }))) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                if (currentInvoiceNode.nodeName === "DocumentTotals") {
                    var totalsNodes = currentInvoiceNode.childNodes;
                    var totalsAttributes = saft_attributes_list_1.SaftAttributeList.DocumentTotalsAttributes;
                    if (!(totalsNodes.length - 1 <= 0)) {
                        if (!(document_totals_1.DocumentTotalsValidation.isDocumentTotalsValid({ totalsAttributes: totalsAttributes, totalsNodes: totalsNodes }))) {
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
    InvoiceValidation.checkInvoiceChidrenAndSiblings = function (_a) {
        var nodeList = _a.nodeList, attributeList = _a.attributeList;
        for (var attrIndex = 0; attrIndex < attributeList.length; attrIndex++) {
            var attribute = attributeList[attrIndex];
            /// CHECKING EXEMPTIONS
            if (attribute.getName() === "TaxExemptionReason"
                || attribute.getName() === "TaxExemptionCode") {
                if (!(tax_exemptions_1.TaxExemption.validateExemptions(nodeList))) {
                    return false;
                }
            }
            if (!(this.findAttributeOnNode({ element: attribute, nodeList: nodeList }))) {
                return false;
            }
        }
        return true;
    };
    InvoiceValidation.findAttributeOnNode = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        if (element.getName() !== "TaxExemptionReason" && element.getName() !== "TaxExemptionCode") {
            for (var nodeIndex = 0; nodeIndex < nodeList.length; nodeIndex++) {
                if (element.getName() === nodeList[nodeIndex].nodeName) {
                    if (nodeList[nodeIndex].nodeName === "Address") {
                        var addressAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShipFromAddressAttributes;
                        var addressNodes = nodeList[nodeIndex].childNodes;
                        if (!(addressNodes.length - 1 <= 0)) {
                            if (!(this.checkInvoiceChidrenAndSiblings({ nodeList: addressNodes, attributeList: addressAttributes }))) {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                    else if (nodeList[nodeIndex].nodeName === "Tax") {
                        var taxNodes = nodeList[nodeIndex].childNodes;
                        var taxAttributes = saft_attributes_list_1.SaftAttributeList.LineTaxAttributes;
                        if (!(taxNodes.length - 1 <= 0)) {
                            if (!(this.checkInvoiceChidrenAndSiblings({ nodeList: taxNodes, attributeList: taxAttributes }))) {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                    else if (nodeList[nodeIndex].nodeName === "Currency") {
                        var currencyNodes = nodeList[nodeIndex].childNodes;
                        var currencyAttributes = saft_attributes_list_1.SaftAttributeList.CurrencyAttributes;
                        if (!(currencyNodes.length - 1 <= 0)) {
                            if (!(this.checkInvoiceChidrenAndSiblings({ nodeList: currencyNodes, attributeList: currencyAttributes }))) {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                    return true;
                }
            }
            console.log(element);
            return false;
        }
        return true;
    };
    InvoiceValidation.matchAttributeListWithNodeList = function (_a) {
        var attributeList = _a.attributeList, nodeList = _a.nodeList;
        for (var attributeIndex = 0; attributeIndex < attributeList.length; attributeIndex++) {
            var element = attributeList[attributeIndex];
            if (!(this.isElementFoundInTheNode({ element: element, nodeList: nodeList }))) {
                return false;
            }
        }
        return true;
    };
    InvoiceValidation.isElementFoundInTheNode = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var index = 0; index < nodeList.length; index++) {
            if (nodeList[index].nodeName === element.getName()) {
                return true;
            }
        }
        return false;
    };
    return InvoiceValidation;
}());
exports.InvoiceValidation = InvoiceValidation;
