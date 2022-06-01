'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DocumentTotalsValidation = void 0;
var iresult_1 = require('../../../commons/iresult');
var saft_attributes_list_1 = require('../../../commons/saft_attributes_list');
var saft_validation_1 = require('../../../commons/saft_validation');
var DocumentTotalsValidation = /** @class */ (function () {
  function DocumentTotalsValidation() {}
  DocumentTotalsValidation.isDocumentTotalsValid = function (_a) {
    var totalsNodes = _a.totalsNodes;
    var currencyExists = this.currencyExistsInTheNode(totalsNodes);
    // IF CURRENCY DOES NOT EXIST
    if (!currencyExists) {
      var attributes = saft_attributes_list_1.SaftAttributeList.DocumentTotalsSimpleAttributes;
      var totalsResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
        attributes: attributes,
        nodeList: totalsNodes,
      });
      if (!totalsResult.success) {
        return totalsResult;
      }
    }
    // CURRENCY EXISTS
    else if (currencyExists) {
      var attributes = saft_attributes_list_1.SaftAttributeList.DocumentTotalsWithCurrencyAttributes;
      var currencyResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
        attributes: attributes,
        nodeList: totalsNodes,
      });
      if (!currencyResult.success) {
        return currencyResult;
      } else {
        for (var _i = 0, _b = Object.keys(totalsNodes); _i < _b.length; _i++) {
          var totalKey = _b[_i];
          var currentNode = totalsNodes[totalKey];
          if (currentNode.nodeName === 'Currency') {
            var currencyNodes = currentNode.childNodes;
            if (!(currencyNodes.length - 1 <= 0)) {
              var currencyAttributes = saft_attributes_list_1.SaftAttributeList.CurrencyAttributes;
              var currencyResult_1 = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
                nodeList: currencyNodes,
                attributes: currencyAttributes,
              });
              if (!currencyResult_1.success) {
                return currencyResult_1;
              }
            } else {
              return new iresult_1.DataResult({ message: 'Elemento [Currency] inv\u00E1lido', success: false });
            }
          }
        }
      }
    }
    return new iresult_1.DataResult({ message: 'Elemento válido!', success: true });
  };
  DocumentTotalsValidation.currencyExistsInTheNode = function (nodeList) {
    for (var _i = 0, _a = Object.keys(nodeList); _i < _a.length; _i++) {
      var nodeKey = _a[_i];
      var currentNode = nodeList[nodeKey];
      if (currentNode.nodeName === 'Currency') {
        return true;
      }
    }
    return false;
  };
  return DocumentTotalsValidation;
})();
exports.DocumentTotalsValidation = DocumentTotalsValidation;
