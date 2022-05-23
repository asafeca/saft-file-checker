"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftValidation = void 0;
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
        var attributeList = _a.attributeList, childNode = _a.childNode;
        for (var x = 0; x < attributeList.length; x++) {
            if (!(this.checkHeaderElement({ element: attributeList[x], childNodes: childNode }))) {
                return false;
            }
        }
        return true;
    };
    SaftValidation.checkHeaderElement = function (_a) {
        var element = _a.element, childNodes = _a.childNodes;
        for (var x = 0; x < childNodes.childNodes.length; x++) {
            var childNode = childNodes.childNodes[x];
            if (element.getName() === childNode.nodeName) {
                if (element.getName() === "CompanyAddress") {
                    var companyAddressAttrListTemplate = saft_attributes_list_1.SaftAttributeList.CompanyAddressAttributes;
                    for (var k = 0; k < companyAddressAttrListTemplate.length; k++) {
                        if (!(this.checkCompanyAddressAttr(childNode))) {
                            return false;
                        }
                    }
                }
                return true;
            }
        }
        return false;
    };
    SaftValidation.checkCompanyAddressAttr = function (childNode) {
        if (childNode.hasChildNodes()) {
            var companyAddressAttrTemplate = saft_attributes_list_1.SaftAttributeList.CompanyAddressAttributes;
            for (var x = 0; x < companyAddressAttrTemplate.length; x++) {
                if (!(this.checkCompanyAddressAttrElement({ element: companyAddressAttrTemplate[x], chilNode: childNode }))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    SaftValidation.checkCompanyAddressAttrElement = function (_a) {
        var element = _a.element, chilNode = _a.chilNode;
        for (var x = 0; x < chilNode.childNodes.length; x++) {
            var attrList = chilNode.childNodes;
            if (element.getName() === attrList[x].nodeName) {
                return true;
            }
        }
        return false;
    };
    SaftValidation.prototype.childNodeChildrenMatch = function (_a) {
        var childNode = _a.childNode, matchList = _a.matchList;
        for (var k = 0; k < matchList.length; k++) {
            var taxEntry = matchList[k];
            if (!(this.isElementValid({ element: taxEntry, childNode: childNode }))) {
                return false;
            }
        }
        return true;
    };
    SaftValidation.prototype.isElementValid = function (_a) {
        var element = _a.element, childNode = _a.childNode;
        for (var x = 0; x < childNode.childNodes.length; x++) {
            if (element.getName() === childNode.childNodes[x].nodeName) {
                return true;
            }
        }
        return false;
    };
    return SaftValidation;
}());
exports.SaftValidation = SaftValidation;
