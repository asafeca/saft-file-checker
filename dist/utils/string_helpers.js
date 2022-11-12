"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    static firstCharToLowerCase(strValue) {
        strValue = strValue.replace(strValue.substring(0, 1), strValue.substring(0, 1).toLowerCase());
        return strValue;
    }
}
exports.StringHelper = StringHelper;
