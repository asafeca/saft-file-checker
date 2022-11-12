"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsValidation = void 0;
const file_parser_1 = require("./file_parser");
const file_starage_parser_1 = require("./file_starage_parser");
const FileModelSAFT_1 = require("./model/saft/FileModelSAFT");
class FieldsValidation {
    validate({ reporte, modelRules }) {
        file_starage_parser_1.FileParserStorage.dispose();
        const file = reporte.file;
        file_starage_parser_1.FileParserStorage.set(file_parser_1.FileParser.parse(file, reporte), reporte = reporte);
        return this.processSaft({ fileModel: this.mapToFileModel(file_starage_parser_1.FileParserStorage.fileModel), modelRules: modelRules });
    }
    mapToFileModel(obj) {
        let fromEntries = Object.fromEntries(obj);
        let strData = JSON.stringify(fromEntries);
        console.log(strData);
        // const model: FileModelSAFT = JSON.parse(fromEntries)
        // console.log(model.header)
        return new FileModelSAFT_1.FileModelSAFT;
    }
    processSaft({ fileModel, modelRules }) {
        return new Array();
    }
}
exports.FieldsValidation = FieldsValidation;
