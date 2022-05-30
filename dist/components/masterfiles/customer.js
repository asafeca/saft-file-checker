"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidation = void 0;
var content_type_validation_1 = require("../commons/content_type_validation");
var iresult_1 = require("../commons/iresult");
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var CustomerValidation = /** @class */ (function () {
    function CustomerValidation() {
    }
    CustomerValidation.isCustomerValid = function (_a) {
        var customerNodeList = _a.customerNodeList;
        if (!(customerNodeList.length - 1 <= 0)) {
            var customerAttributes = saft_attributes_list_1.SaftAttributeList.CustomerAttributes;
            var result = this.checkCustomerChildren({ customerNodeList: customerNodeList, customerAttributes: customerAttributes });
            if (!result.success) {
                return result;
            }
            return new iresult_1.DataResult({ message: "Ficheiro válidado com sucesso!", success: true });
        }
        return new iresult_1.DataResult({ message: "Ficheiro inválido! [Customer] inválido", success: false });
    };
    CustomerValidation.checkCustomerChildren = function (_a) {
        var customerNodeList = _a.customerNodeList, customerAttributes = _a.customerAttributes;
        for (var _i = 0, _b = Object.keys(customerAttributes); _i < _b.length; _i++) {
            var attrKey = _b[_i];
            var attribute = customerAttributes[attrKey];
            var result = this.isAttributeInTheNode({ attribute: attribute, customerNodeList: customerNodeList });
            if (!(result.success)) {
                return result;
            }
        }
        return new iresult_1.DataResult({ message: "Elemento válido.", success: true });
    };
    CustomerValidation.isAttributeInTheNode = function (_a) {
        var attribute = _a.attribute, customerNodeList = _a.customerNodeList;
        for (var _i = 0, _b = Object.keys(customerNodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = customerNodeList[nodeKey];
            if (attribute.getName() === currentNode.nodeName) {
                if (attribute.getName() === "BillingAddress" || attribute.getName() === "ShipToAddress") {
                    var addressAttributes = saft_attributes_list_1.SaftAttributeList.BillingAndShipToAddressAttributes;
                    var addressNodes = currentNode.childNodes;
                    var addressResult = this.checkCustomerChildren({ customerNodeList: addressNodes, customerAttributes: addressAttributes });
                    if (!addressResult.success) {
                        return addressResult;
                    }
                }
                var isContentValid = content_type_validation_1.ContentTypeValidation.isContentValid({
                    typeModel: attribute, content: currentNode.textContent !== null ? currentNode.textContent : ""
                });
                if (!isContentValid) {
                    return new iresult_1.DataResult({ message: "Elemento ".concat(attribute.getName(), " com valor inv\u00E1lido"), success: false });
                }
                return new iresult_1.DataResult({ message: "Elemento válido", success: true });
            }
        }
        return new iresult_1.DataResult({ message: "Elemento inv\u00E1lido. [".concat(attribute.getName(), "] n\u00E3o encontrado!"), success: false });
    };
    return CustomerValidation;
}());
exports.CustomerValidation = CustomerValidation;
