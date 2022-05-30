"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxTableValidation = void 0;
var iresult_1 = require("../commons/iresult");
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var saft_validation_1 = require("../commons/saft_validation");
var TaxTableValidation = /** @class */ (function () {
    function TaxTableValidation() {
    }
    TaxTableValidation.isTaxTableValid = function (_a) {
        var nodeList = _a.nodeList;
        if (!(nodeList.length - 1 <= 0)) {
            var attributes = saft_attributes_list_1.SaftAttributeList.TaxTableAttributes;
            // CHECK TAXTABLEATTRIBUTES
            var taxResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ attributes: attributes, nodeList: nodeList });
            if (!taxResult.success) {
                return taxResult;
            }
            for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
                var nodeKey = _b[_i];
                var currentNode = nodeList[nodeKey];
                if (currentNode.nodeName === "TaxTableEntry") {
                    var entryNodes = currentNode.childNodes;
                    var entryAttributes = saft_attributes_list_1.SaftAttributeList.TaxTableEntryAttributes;
                    if (!(entryNodes.length - 1 <= 0)) {
                        var entryResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({ attributes: entryAttributes, nodeList: entryNodes });
                        if (!(entryResult.success)) {
                            return entryResult;
                        }
                    }
                    else {
                        return new iresult_1.DataResult({
                            message: "Elemento inv\u00E1lido. [".concat(currentNode.nodeName, "] inv\u00E1lido"), success: false
                        });
                    }
                }
            }
        }
        else {
            return new iresult_1.DataResult({ success: false, message: "Elemento inv\u00E1lido. [TaxTable]" });
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido" });
    };
    return TaxTableValidation;
}());
exports.TaxTableValidation = TaxTableValidation;
