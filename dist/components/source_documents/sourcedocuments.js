"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceDocuments = void 0;
var saft_attributes_list_1 = require("../commons/saft_attributes_list");
var source_documents_validation_1 = require("./source_documents_validation");
var SourceDocuments = /** @class */ (function () {
    function SourceDocuments(childNode) {
        this.childNode = childNode;
    }
    SourceDocuments.prototype.isSourceDocumentsValid = function () {
        if (this.childNode !== null && this.childNode !== undefined && this.childNode.hasChildNodes()) {
            var sourceAttributes = saft_attributes_list_1.SaftAttributeList.SourceDocumentsAttributes;
            if (!(new source_documents_validation_1.SourceDocumentsValidation().childNodeChildrenMatch({ childNode: this.childNode, matchList: sourceAttributes }))) {
                return false;
            }
            return true;
        }
        return false;
    };
    return SourceDocuments;
}());
exports.SourceDocuments = SourceDocuments;
