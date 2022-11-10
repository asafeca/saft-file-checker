"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftCompanyAddress = void 0;
var iresult_1 = require("../commons/iresult");
var saft_validation_1 = require("../commons/saft_validation");
var SaftCompanyAddress = /** @class */ (function () {
    function SaftCompanyAddress(address) {
        this.address = address;
    }
    SaftCompanyAddress.prototype.isCompanyAddressValid = function () {
        if (this.address !== null && this.address !== undefined) {
            var headerList = this.address.childNodes;
            for (var _i = 0, _a = Object.keys(headerList); _i < _a.length; _i++) {
                var keys = _a[_i];
                var currentNode = headerList[keys];
                if (currentNode.nodeName !== '#text') {
                    if (!saft_validation_1.SaftValidation.isString(currentNode.textContent)) {
                        return new iresult_1.DataResult({
                            message: "Ficheiro inv\u00E1lido [".concat(currentNode.nodeName, "] n\u00E3o encontrado"),
                            success: false,
                        });
                    }
                }
            }
            return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
        }
        return new iresult_1.DataResult({
            message: "Ficheiro inv\u00E1lido [Address] n\u00E3o \u00E9 v\u00E1lido",
            success: false,
        });
    };
    return SaftCompanyAddress;
}());
exports.SaftCompanyAddress = SaftCompanyAddress;
