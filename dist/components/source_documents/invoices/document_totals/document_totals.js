"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTotalsValidation = void 0;
var saft_attributes_list_1 = require("../../../commons/saft_attributes_list");
var currency_1 = require("./currency");
var DocumentTotalsValidation = /** @class */ (function () {
    function DocumentTotalsValidation() {
    }
    DocumentTotalsValidation.isDocumentTotalsValid = function (_a) {
        var totalsAttributes = _a.totalsAttributes, totalsNodes = _a.totalsNodes;
        for (var attrIndex = 0; attrIndex < totalsAttributes.length; attrIndex++) {
            var element = totalsAttributes[attrIndex];
            if (!(this.attributeIsInTheNode({ element: element, totalsNodes: totalsNodes }))) {
                return false;
            }
        }
        return true;
    };
    DocumentTotalsValidation.attributeIsInTheNode = function (_a) {
        var element = _a.element, totalsNodes = _a.totalsNodes;
        if (element.getName() === "Currency") {
            var currencyNodes = totalsNodes;
            var currencyAttributes = saft_attributes_list_1.SaftAttributeList.CurrencyAttributes;
            return currency_1.CurrencyValidation.isCurrencyValidation({ attributeList: currencyAttributes, currencyNodes: currencyNodes });
        }
        for (var nodeIndex = 0; nodeIndex < totalsNodes.length; nodeIndex++) {
            var currentNode = totalsNodes[nodeIndex];
            if (currentNode.nodeName === element.getName()) {
                return true;
            }
        }
        return false;
    };
    return DocumentTotalsValidation;
}());
exports.DocumentTotalsValidation = DocumentTotalsValidation;
