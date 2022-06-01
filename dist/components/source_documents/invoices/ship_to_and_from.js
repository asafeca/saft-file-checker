'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ShipToAndFromValidation = void 0;
var iresult_1 = require('../../commons/iresult');
var saft_attributes_list_1 = require('../../commons/saft_attributes_list');
var ShipToAndFromValidation = /** @class */ (function () {
  function ShipToAndFromValidation() {}
  ShipToAndFromValidation.shipToAndFromValid = function (_a) {
    var attributeList = _a.attributeList,
      nodeList = _a.nodeList;
    for (var _i = 0, _b = Object.keys(attributeList); _i < _b.length; _i++) {
      var shipKey = _b[_i];
      var attribute = attributeList[shipKey];
      var result = this.attributeIsInTheNode({ element: attribute, nodeList: nodeList });
      if (!result.success) {
        return result;
      }
    }
    return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
  };
  ShipToAndFromValidation.attributeIsInTheNode = function (_a) {
    var element = _a.element,
      nodeList = _a.nodeList;
    for (var _i = 0, _b = Object.keys(nodeList); _i < _b.length; _i++) {
      var nodeKey = _b[_i];
      var shipNode = nodeList[nodeKey];
      if (element.getName() === shipNode.nodeName) {
        if (shipNode.nodeName === 'Address') {
          var addressNodes = shipNode.childNodes;
          for (var x = 0; x < addressNodes.length; x++) {}
          var addressAttributes = saft_attributes_list_1.SaftAttributeList.ShipToAndShipFromAddressAttributes;
          var result = this.shipToAndFromValid({ attributeList: addressAttributes, nodeList: addressNodes });
          if (!result.success) {
            return result;
          }
        }
        return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
      }
    }
    return new iresult_1.DataResult({
      message: 'Ficheiro inv\u00E1lido. ['.concat(element.getName(), '] n\u00E3o encontrado'),
      success: false,
    });
  };
  return ShipToAndFromValidation;
})();
exports.ShipToAndFromValidation = ShipToAndFromValidation;
