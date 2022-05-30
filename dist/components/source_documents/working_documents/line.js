"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkDocLineValidation = void 0;
var iresult_1 = require("../../commons/iresult");
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var saft_validation_1 = require("../../commons/saft_validation");
var WorkDocLineValidation = /** @class */ (function () {
    function WorkDocLineValidation() {
    }
    WorkDocLineValidation.isLineValid = function (_a) {
        var nodeList = _a.nodeList, attributes = _a.attributes;
        for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = nodeList[nodeKey];
            if (currentNode.nodeName === "Tax") {
                var taxNodes = currentNode.childNodes;
                var taxAttributes = saft_attributes_list_1.SaftAttributeList.WorkDocTaxAttributes;
                if (!(taxNodes.length - 1 <= 0)) {
                    var taxResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                        nodeList: taxNodes, attributes: taxAttributes
                    });
                    if (!taxResult.success) {
                        return taxResult;
                    }
                }
                else {
                    return new iresult_1.DataResult({ success: false, message: "\u00C8lemento [Tax] inv\u00E1lido" });
                }
            }
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido" });
    };
    return WorkDocLineValidation;
}());
exports.WorkDocLineValidation = WorkDocLineValidation;
