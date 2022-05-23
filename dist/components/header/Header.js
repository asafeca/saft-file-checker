"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftHeader = void 0;
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var saft_validation_1 = require("../commons/saft_validation");
/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
var SaftHeader = /** @class */ (function () {
    function SaftHeader(header) {
        this.header = header;
    }
    SaftHeader.prototype.isHeaderValid = function () {
        if (this.header !== null && this.header !== undefined) {
            if (this.header.hasChildNodes()) {
                // CHECK HEADER ATTRIBUTES
                var dataList = saft_attributes_list_1.SaftAttributeList.HeaderAttributes;
                return saft_validation_1.SaftValidation.checkHeaderAttributeList({ attributeList: dataList, childNode: this.header });
            }
            return false;
        }
        return false;
    };
    return SaftHeader;
}());
exports.SaftHeader = SaftHeader;
