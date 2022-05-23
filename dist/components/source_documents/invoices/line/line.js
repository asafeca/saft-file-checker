"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineValidation = void 0;
var saft_attributes_list_1 = require("../../../commons/saft_attributes_list");
var tax_exemptions_1 = require("../tax_exemptions");
var tax_1 = require("./tax");
var LineValidation = /** @class */ (function () {
    function LineValidation() {
    }
    LineValidation.isLineValid = function (_a) {
        var attributeList = _a.attributeList, lineNodes = _a.lineNodes;
        for (var attributeIndex = 0; attributeIndex < attributeList.length; attributeIndex++) {
            var attribute = attributeList[attributeIndex];
            if (!(this.lineChildrenValid({ element: attribute, lineNodes: lineNodes }))) {
                return false;
            }
        }
        return true;
    };
    LineValidation.lineChildrenValid = function (_a) {
        var element = _a.element, lineNodes = _a.lineNodes;
        // THEY ARE OPTIONAL ATTRIBUTES
        if (element.getName() === "TaxExemptionReason" || element.getName() === "TaxExemptionCode") {
            return tax_exemptions_1.TaxExemption.validateExemptions(lineNodes);
        }
        for (var nodeIndex = 0; nodeIndex < lineNodes.length; nodeIndex++) {
            if (lineNodes[nodeIndex].nodeName === element.getName()) {
                var currentNode = lineNodes[nodeIndex];
                if (currentNode.nodeName === "Tax") {
                    var taxNodes = currentNode.childNodes;
                    var taxAttributes = saft_attributes_list_1.SaftAttributeList.LineTaxAttributes;
                    if (!(tax_1.TaxValidation.isTaxValid({ taxAttributeList: taxAttributes, taxNodes: taxNodes }))) {
                        return false;
                    }
                }
                return true;
            }
        }
        console.log(element.getName());
        return false;
    };
    return LineValidation;
}());
exports.LineValidation = LineValidation;
