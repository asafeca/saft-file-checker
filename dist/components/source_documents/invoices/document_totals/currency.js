"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyValidation = void 0;
var CurrencyValidation = /** @class */ (function () {
    function CurrencyValidation() {
    }
    CurrencyValidation.isCurrencyValidation = function (_a) {
        var attributeList = _a.attributeList, currencyNodes = _a.currencyNodes;
        // FIRST CHECK IF CURRENCY EXISTS
        if (!this.isCurrencyInTheNode(currencyNodes)) {
            return true;
        }
        for (var attrIndex = 0; attrIndex < attributeList.length; attrIndex++) {
            var attribute = attributeList[attrIndex];
            if (!(this.isAttributeFoundInNode({ element: attribute, currencyNodes: currencyNodes }))) {
                console.log("".concat(attribute.getName(), "   ::::::::::::::::::::::::HERE"));
                return false;
            }
        }
        return true;
    };
    CurrencyValidation.isAttributeFoundInNode = function (_a) {
        var element = _a.element, currencyNodes = _a.currencyNodes;
        if (element.getName() === "CurrencyCode" ||
            element.getName() === "CurrencyAmount" ||
            element.getName() === "ExchangeRate") {
            return true;
        }
        for (var nodeIndex = 0; nodeIndex < currencyNodes.length; nodeIndex++) {
            var currencyNode = currencyNodes[nodeIndex];
            if (currencyNode.nodeName === element.getName()) {
                return true;
            }
        }
        return false;
    };
    CurrencyValidation.isCurrencyInTheNode = function (totalNodes) {
        for (var index = 0; index < totalNodes.length; index++) {
            var currentnode = totalNodes[index];
            if (currentnode.nodeName === "Currency") {
                return true;
            }
        }
        return false;
    };
    return CurrencyValidation;
}());
exports.CurrencyValidation = CurrencyValidation;
