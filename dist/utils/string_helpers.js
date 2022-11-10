"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.firstCharToLowerCase = function (strValue) {
        strValue = strValue.replace(strValue.substring(0, 1), strValue.substring(0, 1).toLowerCase());
        return strValue;
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
