"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxValidation = void 0;
var iresult_1 = require("../../../commons/iresult");
var TaxValidation = /** @class */ (function () {
    function TaxValidation() {
    }
    TaxValidation.isTaxValid = function (_a) {
        var taxAttributeList = _a.taxAttributeList, taxNodes = _a.taxNodes;
        for (var attributeIndex = 0; attributeIndex < taxAttributeList.length; attributeIndex++) {
            var attribute = taxAttributeList[attributeIndex];
            var result = this.taxChildValid({ element: attribute, taxNodes: taxNodes });
            if (!(result.success)) {
                return result;
            }
        }
        return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
    };
    TaxValidation.taxChildValid = function (_a) {
        var element = _a.element, taxNodes = _a.taxNodes;
        for (var nodeIndex = 0; nodeIndex < taxNodes.length; nodeIndex++) {
            var taxNode = taxNodes[nodeIndex];
            if (taxNode.nodeName === element.getName()) {
                return new iresult_1.DataResult({ message: "Ficheiro valido", success: true });
            }
        }
        return new iresult_1.DataResult({ success: false, message: "[".concat(element.getName(), "] n\u00E3o encontrado!") });
    };
    return TaxValidation;
}());
exports.TaxValidation = TaxValidation;
