"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftAttributeModel = void 0;
var SaftAttributeModel = /** @class */ (function () {
    function SaftAttributeModel(_a) {
        var name = _a.name, type = _a.type, isPresent = _a.isPresent;
        this.name = name;
        this.type = type;
        this.isPresent = isPresent;
    }
    // SETTING ATTRIBUTES
    SaftAttributeModel.prototype.setName = function (name) {
        this.name = name;
    };
    SaftAttributeModel.prototype.setType = function (type) {
        this.type = type;
    };
    SaftAttributeModel.prototype.setIsPresent = function (isPresent) {
        this.isPresent = isPresent;
    };
    // GETTING ATTRIBUTES
    SaftAttributeModel.prototype.getName = function () {
        return this.name;
    };
    SaftAttributeModel.prototype.getType = function () {
        return this.type;
    };
    SaftAttributeModel.prototype.getIsPresent = function () {
        return this.isPresent;
    };
    return SaftAttributeModel;
}());
exports.SaftAttributeModel = SaftAttributeModel;
