"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyValidation = void 0;
var iresult_1 = require("../../../commons/iresult");
var saft_attributes_list_1 = require("../../../commons/saft_attributes_list");
var saft_validation_1 = require("../../../commons/saft_validation");
var CurrencyValidation = /** @class */ (function () {
    function CurrencyValidation() {
    }
    CurrencyValidation.isCurrencyValid = function (totalsNodes) {
        var currencyAttributes = saft_attributes_list_1.SaftAttributeList.CurrencyAttributes;
        for (var _i = 0, _a = Object.keys(totalsNodes); _i < _a.length; _i++) {
            var nodeKey = _a[_i];
            var currentNode = totalsNodes[nodeKey];
            if (currentNode.nodeName === 'Currency') {
                var currencyNodes = currentNode.childNodes;
                if (!(currencyNodes.length - 1 <= 0)) {
                    var currencyResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                        attributes: currencyAttributes,
                        nodeList: currencyNodes,
                    });
                    if (!currencyResult.success) {
                        return currencyResult;
                    }
                }
                else {
                    return new iresult_1.DataResult({ message: 'Elemento [Currency] inválido', success: false });
                }
            }
        }
        return new iresult_1.DataResult({ message: 'Elemento válido', success: true });
    };
    return CurrencyValidation;
}());
exports.CurrencyValidation = CurrencyValidation;
