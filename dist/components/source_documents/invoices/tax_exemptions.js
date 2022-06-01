'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaxExemption = void 0;
var iresult_1 = require('../../commons/iresult');
var TaxExemption = /** @class */ (function () {
  function TaxExemption() {}
  TaxExemption.validateExemptions = function (nodeList) {
    var code = this.checkExemptionReasonOrCode({ param: 'TaxExemptionCode', nodeList: nodeList });
    var reason = this.checkExemptionReasonOrCode({ param: 'TaxExemptionReason', nodeList: nodeList });
    if (reason && !code) {
      return new iresult_1.DataResult({
        message: 'FIcheiro Inv\u00E1lido. ['.concat(code, '] n\u00E3o encontrado'),
        success: false,
      });
    } else if (!reason && code) {
      return new iresult_1.DataResult({
        message: 'FIcheiro Inv\u00E1lido. ['.concat(reason, '] n\u00E3o encontrado'),
        success: false,
      });
    }
    return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
  };
  TaxExemption.checkExemptionReasonOrCode = function (_a) {
    var param = _a.param,
      nodeList = _a.nodeList;
    for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
      var nodeKey = _b[_i];
      if (nodeList[nodeKey].nodeName === param) {
        return true;
      }
    }
    return false;
  };
  return TaxExemption;
})();
exports.TaxExemption = TaxExemption;
