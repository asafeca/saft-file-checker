'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WorkDocumentValidation = void 0;
var iresult_1 = require('../../commons/iresult');
var saft_attributes_list_1 = require('../../commons/saft_attributes_list');
var saft_validation_1 = require('../../commons/saft_validation');
var document_totals_1 = require('../invoices/document_totals/document_totals');
var line_1 = require('./line');
var WorkDocumentValidation = /** @class */ (function () {
  function WorkDocumentValidation() {}
  WorkDocumentValidation.isWorkDocumentValid = function (workDocNodeList) {
    var attributes = saft_attributes_list_1.SaftAttributeList.WorkDocumentAttributes;
    for (var _i = 0, _a = Object.keys(attributes); _i < _a.length; _i++) {
      var attrKey = _a[_i];
      var attribute = attributes[attrKey];
      var result = this.findAttributeInTheNode({ attribute: attribute, nodeList: workDocNodeList });
      if (!result.success) {
        return result;
      }
    }
    return new iresult_1.DataResult({ message: 'Elemento válido!', success: true });
  };
  WorkDocumentValidation.findAttributeInTheNode = function (_a) {
    var attribute = _a.attribute,
      nodeList = _a.nodeList;
    for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
      var nodeKey = _b[_i];
      var currentNode = nodeList[nodeKey];
      if (currentNode.nodeName === attribute.getName()) {
        if (currentNode.nodeName === 'DocumentStatus') {
          var docStatusNodes = currentNode.childNodes;
          var docStatusAttributes = saft_attributes_list_1.SaftAttributeList.WorkDocDocumentStatusAttributes;
          var workDocResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            nodeList: docStatusNodes,
            attributes: docStatusAttributes,
          });
          if (!workDocResult.success) {
            return workDocResult;
          }
        } else if (currentNode.nodeName === 'Line') {
          var lineNodes = currentNode.childNodes;
          var lineAttributes = saft_attributes_list_1.SaftAttributeList.WorkDocLineAttributes;
          var lineResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            nodeList: lineNodes,
            attributes: lineAttributes,
          });
          if (!lineResult.success) {
            return lineResult;
          }
          var lineResult1 = line_1.WorkDocLineValidation.isLineValid({
            nodeList: lineNodes,
            attributes: lineAttributes,
          });
          if (!lineResult1.success) {
            return lineResult1;
          }
        } else if (currentNode.nodeName === 'DocumentTotals') {
          var totalsNodes = currentNode.childNodes;
          var totalsResult = document_totals_1.DocumentTotalsValidation.isDocumentTotalsValid({
            totalsNodes: totalsNodes,
          });
          if (!totalsResult.success) {
            return totalsResult;
          }
        }
      }
    }
    return new iresult_1.DataResult({ success: true, message: 'Elemento válido' });
  };
  return WorkDocumentValidation;
})();
exports.WorkDocumentValidation = WorkDocumentValidation;
