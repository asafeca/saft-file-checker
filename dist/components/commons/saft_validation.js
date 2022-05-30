"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftValidation = void 0;
var tax_exemptions_1 = require("../source_documents/invoices/tax_exemptions");
var content_type_validation_1 = require("./content_type_validation");
var iresult_1 = require("./iresult");
var saft_attributes_list_1 = require("./saft_attributes_list");
var SaftValidation = /** @class */ (function () {
    function SaftValidation() {
    }
    SaftValidation.isString = function (value) {
        return (typeof (value) === "string" || typeof (value) === "number")
            && value !== null &&
            value !== undefined && value !== "";
    };
    SaftValidation.checkHeaderAttributeList = function (_a) {
        var attributeList = _a.attributeList, nodeList = _a.nodeList;
        for (var _i = 0, _b = Object.keys(attributeList); _i < _b.length; _i++) {
            var keys = _b[_i];
            var attribute = attributeList[keys];
            var result = this.checkHeaderElement({ element: attribute, nodeList: nodeList });
            if (!result.success) {
                return new iresult_1.DataResult({ message: "Element ".concat(attribute.getName(), " Inv\u00E1lido"), success: false });
            }
        }
        return new iresult_1.DataResult({ message: "Ficheiro válido", success: true });
    };
    SaftValidation.checkHeaderElement = function (_a) {
        var element = _a.element, nodeList = _a.nodeList;
        for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
            var key = _b[_i];
            var currentNode = nodeList[key];
            if (currentNode.nodeName !== undefined && currentNode.nodeName !== "#text")
                if (element.getName() === currentNode.nodeName) {
                    if (element.getName() === "CompanyAddress") {
                        var addressNodes = currentNode.childNodes;
                        var result = this.checkCompanyAddressAttr(addressNodes);
                        if (!(result.success)) {
                            return new iresult_1.DataResult({ success: false, message: "".concat(element.getName(), " n\u00E3o encontrado") });
                        }
                    }
                    var isContentValid = content_type_validation_1.ContentTypeValidation.isContentValid({
                        typeModel: element, content: currentNode.textContent !== null ? currentNode.textContent : ""
                    });
                    if (!isContentValid) {
                        return new iresult_1.DataResult({ message: "Elemento ".concat(element.getName(), " com valor inv\u00E1lido"), success: false });
                    }
                    return new iresult_1.DataResult({ success: true, message: "Ficheiro válido" });
                }
        }
        return new iresult_1.DataResult({ success: false, message: "Ficheiro Inv\u00E1lido. ".concat(element.getName(), " n\u00E3o encontrado") });
    };
    SaftValidation.checkCompanyAddressAttr = function (nodeList) {
        if (!(nodeList.length - 1 <= 0)) {
            var addressAttributes = saft_attributes_list_1.SaftAttributeList.CompanyAddressAttributes;
            for (var _i = 0, _a = Object.keys(addressAttributes); _i < _a.length; _i++) {
                var attrKey = _a[_i];
                var attribute = addressAttributes[attrKey];
                var result = this.checkCompanyAddressAttrElement({ attribute: attribute, nodeList: nodeList });
                if (!result.success) {
                    return result;
                }
            }
        }
        return new iresult_1.DataResult({ success: true, message: "Ficheiro válido" });
    };
    SaftValidation.checkCompanyAddressAttrElement = function (_a) {
        var attribute = _a.attribute, nodeList = _a.nodeList;
        for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = nodeList[nodeKey];
            if (currentNode.nodeName === attribute.getName()) {
                return new iresult_1.DataResult({ success: true, message: "Ficheiro v\u00E1lido." });
            }
        }
        return new iresult_1.DataResult({ success: false, message: "Ficheiro Inv\u00E1lido. ".concat(attribute.getName(), " n\u00E3o encontrado") });
    };
    SaftValidation.prototype.childNodeChildrenMatch = function (_a) {
        var childNode = _a.childNode, matchList = _a.matchList;
        for (var k = 0; k < matchList.length; k++) {
            var taxEntry = matchList[k];
            if (!(this.isElementValid({ element: taxEntry, childNode: childNode }))) {
                return new iresult_1.DataResult({ success: false, message: "Ficheiro inv\u00E1lido. [".concat(taxEntry.getName(), "] n\u00E3o encontrado") });
            }
        }
        return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
    };
    SaftValidation.prototype.isElementValid = function (_a) {
        var element = _a.element, childNode = _a.childNode;
        for (var x = 0; x < childNode.childNodes.length; x++) {
            if (element.getName() === childNode.childNodes[x].nodeName) {
                return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
            }
        }
        return new iresult_1.DataResult({ success: false, message: "Ficheiro inv\u00E1lido. [".concat(element.getName(), "] n\u00E3o encontrado") });
    };
    SaftValidation.verifyAttributesInTheNodes = function (_a) {
        var attributes = _a.attributes, nodeList = _a.nodeList;
        for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
            var attrKey = _b[_i];
            var attribute = attributes[attrKey];
            var result = this.isAttributeInTheNode({ attribute: attribute, nodeList: nodeList });
            if (!result.success) {
                return result;
            }
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido!" });
    };
    SaftValidation.isAttributeInTheNode = function (_a) {
        var attribute = _a.attribute, nodeList = _a.nodeList;
        if (attribute.getName() === "TaxExemptionReason" || attribute.getName() === "TaxExemptionCode") {
            return tax_exemptions_1.TaxExemption.validateExemptions(nodeList);
        }
        else {
            for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
                var nodeKey = _b[_i];
                var currentNode = nodeList[nodeKey];
                if (attribute.getName() == currentNode.nodeName) {
                    if (!attribute.getIsParent()) {
                        var isContentValid = content_type_validation_1.ContentTypeValidation.isContentValid({
                            typeModel: attribute, content: currentNode.textContent !== null ? currentNode.textContent : ""
                        });
                        if (!isContentValid) {
                            return new iresult_1.DataResult({ message: "Elemento ".concat(attribute.getName(), " com valor inv\u00E1lido"), success: false });
                        }
                    }
                    return new iresult_1.DataResult({ success: true, message: "Elemento válido!" });
                }
            }
        }
        return new iresult_1.DataResult({ success: false, message: "Elemento inv\u00E1lidoo [".concat(attribute.getName(), "] n\u00E3o encontrado!") });
    };
    return SaftValidation;
}());
exports.SaftValidation = SaftValidation;
