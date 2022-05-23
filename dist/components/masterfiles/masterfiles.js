"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterFiles = void 0;
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var saft_validation_1 = require("../commons/saft_validation");
var MasterFiles = /** @class */ (function () {
    function MasterFiles(masterFileNode) {
        this.masterFileNode = masterFileNode;
    }
    MasterFiles.prototype.isMasterFileValid = function () {
        if (this.masterFileNode !== null && this.masterFileNode !== undefined && this.masterFileNode.hasChildNodes()) {
            var masterElements = saft_attributes_list_1.SaftAttributeList.MasterfilesElements;
            for (var x = 0; x < masterElements.length; x++) {
                if (!(this.checkMasterElement({ element: masterElements[x], childNode: this.masterFileNode }))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    MasterFiles.prototype.checkMasterElement = function (_a) {
        var element = _a.element, childNode = _a.childNode;
        for (var k = 0; k < childNode.childNodes.length; k++) {
            var child = childNode.childNodes[k];
            if (element.getName() === child.nodeName) {
                if (child.hasChildNodes()) {
                    if (element.getName() === "Customer") {
                        var customerAttrTemplateList = saft_attributes_list_1.SaftAttributeList.CustomerAttributes;
                        for (var x = 0; x < customerAttrTemplateList.length; x++) {
                            if (!(this.checkCustomerElement({ element: customerAttrTemplateList[x], customerNode: child }))) {
                                return false;
                            }
                        }
                    }
                    else if (element.getName() === "Product") {
                        if (!(this.isProductValid({ childNode: child }))) {
                            return false;
                        }
                    }
                    else if (element.getName() === "TaxTable") {
                        if (!(this.isTaxTableValid({ childNode: child }))) {
                            return false;
                        }
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    MasterFiles.prototype.isProductValid = function (_a) {
        var childNode = _a.childNode;
        var attrList = saft_attributes_list_1.SaftAttributeList.ProductAttributes;
        for (var k = 0; k < attrList.length; k++) {
            if (!(new saft_validation_1.SaftValidation().isElementValid({ element: attrList[k], childNode: childNode }))) {
                return false;
            }
        }
        return true;
    };
    MasterFiles.prototype.checkCustomerElement = function (_a) {
        var element = _a.element, customerNode = _a.customerNode;
        for (var x = 0; x < customerNode.childNodes.length; x++) {
            if (customerNode.childNodes[x].nodeName !== "#text") {
                var currentNode = customerNode.childNodes[x];
                if (element.getName() === currentNode.nodeName) {
                    if (currentNode.nodeName === "BillingAddress" || currentNode.nodeName === "ShipToAddress") {
                        if (!(this.isAddressValid(currentNode))) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
        return false;
    };
    MasterFiles.prototype.isAddressValid = function (childNode) {
        if (!(new saft_validation_1.SaftValidation().childNodeChildrenMatch({ childNode: childNode, matchList: saft_attributes_list_1.SaftAttributeList.BillingAndShipToAddressAttributes }))) {
            return false;
        }
        return true;
    };
    MasterFiles.prototype.isTaxTableValid = function (_a) {
        var childNode = _a.childNode;
        for (var x = 0; x < childNode.childNodes.length; x++) {
            var attribute = childNode.childNodes[x];
            if (attribute.nodeName !== "#text") {
                var taxEntryList = saft_attributes_list_1.SaftAttributeList.TaxTableEntryAttributes;
                if (!(new saft_validation_1.SaftValidation().childNodeChildrenMatch({ childNode: attribute, matchList: taxEntryList }))) {
                    return false;
                }
            }
        }
        return true;
    };
    return MasterFiles;
}());
exports.MasterFiles = MasterFiles;
