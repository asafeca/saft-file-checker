"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftHeader = void 0;
var iresult_1 = require("../commons/iresult");
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var saft_validation_1 = require("../commons/saft_validation");
/**
 * @param header: THIS IS NODE CHUNCK TO BE ANALYZED
 * @author: Adelino Safeca
 * @description: Object to check if the saft_file header is valid
 * @date 2022/05/16
 */
var SaftHeader = /** @class */ (function () {
    function SaftHeader() {
    }
    SaftHeader.isHeaderValid = function (nodeList) {
        if (!(nodeList.length - 1 <= 0)) {
            // CHECK HEADER ATTRIBUTES
            var dataList = saft_attributes_list_1.SaftAttributeList.HeaderAttributes;
            return saft_validation_1.SaftValidation.checkHeaderAttributeList({ attributeList: dataList, nodeList: nodeList });
        }
        else {
            return new iresult_1.DataResult({ message: "Ficheiro inv\u00E1lido. HEADER inv\u00E1lido", success: false });
        }
    };
    return SaftHeader;
}());
exports.SaftHeader = SaftHeader;
