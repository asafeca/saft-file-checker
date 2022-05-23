"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftCompanyAddress = void 0;
var saft_validation_1 = require("../commons/saft_validation");
var SaftCompanyAddress = /** @class */ (function () {
    function SaftCompanyAddress(address) {
        this.address = address;
    }
    SaftCompanyAddress.prototype.isCompanyAddressValid = function () {
        if (this.address !== null && this.address !== undefined) {
            for (var x = 0; x < this.address.childNodes.length; x++) {
                if (this.address.childNodes[x].nodeName !== "#text") {
                    if (!(saft_validation_1.SaftValidation.isString(this.address.childNodes[x].textContent))) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    };
    return SaftCompanyAddress;
}());
exports.SaftCompanyAddress = SaftCompanyAddress;
