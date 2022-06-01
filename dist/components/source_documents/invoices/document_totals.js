'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DocumentTotalsValidation = void 0;
var DocumentTotalsValidation = /** @class */ (function () {
  function DocumentTotalsValidation() {}
  DocumentTotalsValidation.isDocumentTotalsValid = function (_a) {
    var totalsAttributes = _a.totalsAttributes,
      totalsNodes = _a.totalsNodes;
    for (var attrIndex = 0; attrIndex < totalsAttributes.length; attrIndex++) {
      var element = totalsAttributes[attrIndex];
      if (!this.attributeIsInTheNode({ element: element, totalsNodes: totalsNodes })) {
        return false;
      }
    }
    return true;
  };
  DocumentTotalsValidation.attributeIsInTheNode = function (_a) {
    var element = _a.element,
      totalsNodes = _a.totalsNodes;
    for (var nodeIndex = 0; nodeIndex < totalsNodes.length; nodeIndex++) {
      var currentNode = totalsNodes[nodeIndex];
      if (element.getName() === 'Currency') {
        return true;
      } else {
        if (currentNode.nodeName === element.getName()) {
          console.log(currentNode.nodeName);
          return true;
        }
      }
    }
    return false;
  };
  return DocumentTotalsValidation;
})();
exports.DocumentTotalsValidation = DocumentTotalsValidation;
