"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkingDocuments = void 0;
var iresult_1 = require("../../commons/iresult");
var saft_attributes_list_1 = require("../../commons/saft_attributes_list");
var saft_validation_1 = require("../../commons/saft_validation");
var work_document_1 = require("./work_document");
var WorkingDocuments = /** @class */ (function () {
    function WorkingDocuments() {
    }
    WorkingDocuments.isWorkingDocumentsValid = function (_a) {
        var workingNodes = _a.workingNodes;
        var attributes = saft_attributes_list_1.SaftAttributeList.WorkingDocumentsAttributes;
        var result = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            attributes: attributes,
            nodeList: workingNodes
        });
        if (!result.success) {
            return result;
        }
        for (var _i = 0, _b = Object.keys(attributes); _i < _b.length; _i++) {
            var attrKey = _b[_i];
            var currentAttribute = attributes[attrKey];
            var result_1 = this.findAttributeInTheNode({ attribute: currentAttribute, nodeList: workingNodes });
            if (!result_1.success) {
                return result_1;
            }
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido" });
    };
    WorkingDocuments.findAttributeInTheNode = function (_a) {
        var attribute = _a.attribute, nodeList = _a.nodeList;
        for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
            var nodeKey = _b[_i];
            var currentNode = nodeList[nodeKey];
            if (currentNode.nodeName === attribute.getName()) {
                if (currentNode.nodeName === "WorkDocument") {
                    var attributes = saft_attributes_list_1.SaftAttributeList.WorkDocumentAttributes;
                    var workNodes = currentNode.childNodes;
                    var result = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                        attributes: attributes,
                        nodeList: workNodes
                    });
                    if (!result.success) {
                        return result;
                    }
                    var workResult = work_document_1.WorkDocumentValidation.isWorkDocumentValid(workNodes);
                    if (!workResult.success) {
                        return workResult;
                    }
                }
            }
        }
        return new iresult_1.DataResult({ success: true, message: "Elemento válido" });
    };
    return WorkingDocuments;
}());
exports.WorkingDocuments = WorkingDocuments;
