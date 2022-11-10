"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineValidation = void 0;
var iresult_1 = require("../../../commons/iresult");
var saft_attributes_list_1 = require("../../../commons/saft_attributes_list");
var saft_validation_1 = require("../../../commons/saft_validation");
var LineValidation = /** @class */ (function () {
    function LineValidation() {
    }
    LineValidation.isLineValid = function (_a) {
        var lineNodes = _a.lineNodes, invoiceType = _a.invoiceType;
        var lineAttributeList = invoiceType.getName() === 'NC' ? saft_attributes_list_1.SaftAttributeList.NCLineAttributes : saft_attributes_list_1.SaftAttributeList.FTLineAttributes;
        // CHECK ALL ATTRIBUTES
        var lineResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            nodeList: lineNodes,
            attributes: lineAttributeList,
        });
        if (!lineResult.success) {
            return lineResult;
        }
        for (var _i = 0, _b = Object.keys(lineNodes); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = lineNodes[nodeKey];
            if (currentNode.nodeName === 'Tax') {
                var taxNodes = currentNode.childNodes;
                if (!(taxNodes.length - 1 <= 0)) {
                    var taxAttributes = saft_attributes_list_1.SaftAttributeList.LineTaxAttributes;
                    var taxResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                        nodeList: taxNodes,
                        attributes: taxAttributes,
                    });
                    if (!taxResult.success) {
                        return taxResult;
                    }
                }
                else {
                    return new iresult_1.DataResult({ message: "Elemento [".concat(currentNode.nodeName, "] n\u00E3o v\u00E1lido!"), success: false });
                }
            }
        }
        return new iresult_1.DataResult({ message: 'Elemento válido', success: true });
    };
    return LineValidation;
}());
exports.LineValidation = LineValidation;
