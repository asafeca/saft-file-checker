'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MasterFiles = void 0;
var iresult_1 = require('../commons/iresult');
var saft_attributes_list_1 = require('../commons/saft_attributes_list');
var saft_validation_1 = require('../commons/saft_validation');
var customer_1 = require('./customer');
var tax_table_1 = require('./tax_table');
var MasterFiles = /** @class */ (function () {
  function MasterFiles() {}
  MasterFiles.isMasterFileValid = function (nodeList) {
    if (!(nodeList.length - 1 <= 0)) {
      // VERIFY IF ALL ATTRIBUTES ARE IN THE NODE
      var attributes = saft_attributes_list_1.SaftAttributeList.MasterfilesElements;
      var masterResult = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
        attributes: attributes,
        nodeList: nodeList,
      });
      if (!masterResult.success) {
        return masterResult;
      }
      for (var _i = 0, _a = Object.keys(nodeList); _i < _a.length; _i++) {
        var masterKey = _a[_i];
        var currentNode = nodeList[masterKey];
        if (currentNode.nodeName === 'Customer') {
          var result = customer_1.CustomerValidation.isCustomerValid({ customerNodeList: currentNode.childNodes });
          if (!result.success) {
            return result;
          }
        } else if (currentNode.nodeName === 'Product') {
          var productNodes = currentNode.childNodes;
          var attributes_1 = saft_attributes_list_1.SaftAttributeList.ProductAttributes;
          var result = saft_validation_1.SaftValidation.verifyAttributesInTheNodes({
            attributes: attributes_1,
            nodeList: productNodes,
          });
          if (!result.success) {
            return result;
          }
        } else if (currentNode.nodeName === 'TaxTable') {
          var taxNodes = currentNode.childNodes;
          var taxResult = tax_table_1.TaxTableValidation.isTaxTableValid({ nodeList: taxNodes });
          if (!taxResult.success) {
            return taxResult;
          }
        }
      }
    }
    return new iresult_1.DataResult({ success: true, message: 'Ficheiro v\u00E1lido' });
  };
  return MasterFiles;
})();
exports.MasterFiles = MasterFiles;
