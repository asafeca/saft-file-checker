'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
  function Utils() {}
  Utils.forEach = function (element, callback) {
    for (var i = 0; i < element.childNodes.length; i++) {
      callback(element.childNodes.item(i), i);
    }
  };
  return Utils;
})();
exports.Utils = Utils;
