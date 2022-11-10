"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftAttributeModel = void 0;
var SaftAttributeModel = /** @class */ (function () {
    function SaftAttributeModel(_a) {
        var name = _a.name, type = _a.type, isParent = _a.isParent;
        this.name = name;
        this.type = type;
        this.isParent = isParent;
    }
    // SETTING ATTRIBUTES
    SaftAttributeModel.prototype.setName = function (name) {
        this.name = name;
    };
    SaftAttributeModel.prototype.setType = function (type) {
        this.type = type;
    };
    SaftAttributeModel.prototype.setIsParent = function (isParent) {
        this.isParent = isParent;
    };
    // GETTING ATTRIBUTES
    SaftAttributeModel.prototype.getName = function () {
        return this.name;
    };
    SaftAttributeModel.prototype.getType = function () {
        return this.type;
    };
    SaftAttributeModel.prototype.getIsParent = function () {
        return this.isParent;
    };
    return SaftAttributeModel;
}());
exports.SaftAttributeModel = SaftAttributeModel;
