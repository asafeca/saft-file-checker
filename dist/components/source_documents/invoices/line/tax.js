'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaxValidation = void 0;
var iresult_1 = require('../../../commons/iresult');
var TaxValidation = /** @class */ (function () {
  function TaxValidation() {}
  TaxValidation.isTaxValid = function (_a) {
    var taxAttributeList = _a.taxAttributeList,
      taxNodes = _a.taxNodes;
    for (var _i = 0, _b = Object.keys(taxAttributeList); _i < _b.length; _i++) {
      var attrKey = _b[_i];
      var attribute = taxAttributeList[attrKey];
      var result = this.taxChildValid({ element: attribute, taxNodes: taxNodes });
      if (!result.success) {
        return result;
      }
    }
    return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
  };
  TaxValidation.taxChildValid = function (_a) {
    var element = _a.element,
      taxNodes = _a.taxNodes;
    for (var _i = 0, _b = Object.keys(taxNodes); _i < _b.length; _i++) {
      var nodeKey = _b[_i];
      var taxNode = taxNodes[nodeKey];
      if (taxNode.nodeName === element.getName()) {
        return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
      }
    }
    return new iresult_1.DataResult({
      success: false,
      message: '['.concat(element.getName(), '] n\u00E3o encontrado!'),
    });
  };
  return TaxValidation;
})();
exports.TaxValidation = TaxValidation;
