"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxValidation = void 0;
var TaxValidation = /** @class */ (function () {
    function TaxValidation() {
    }
    TaxValidation.isTaxValid = function (_a) {
        var taxAttributeList = _a.taxAttributeList, taxNodes = _a.taxNodes;
        for (var attributeIndex = 0; attributeIndex < taxAttributeList.length; attributeIndex++) {
            var attribute = taxAttributeList[attributeIndex];
            if (!(this.taxChildValid({ element: attribute, taxNodes: taxNodes }))) {
                return false;
            }
        }
        return true;
    };
    TaxValidation.taxChildValid = function (_a) {
        var element = _a.element, taxNodes = _a.taxNodes;
        for (var nodeIndex = 0; nodeIndex < taxNodes.length; nodeIndex++) {
            var taxNode = taxNodes[nodeIndex];
            if (taxNode.nodeName === element.getName()) {
                return true;
            }
        }
        console.log(element.getName());
        return false;
    };
    return TaxValidation;
}());
exports.TaxValidation = TaxValidation;
