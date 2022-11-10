"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsValidation = void 0;
var file_parser_1 = require("./file_parser");
var file_starage_parser_1 = require("./file_starage_parser");
var FieldsValidation = /** @class */ (function () {
    function FieldsValidation() {
    }
    FieldsValidation.validate = function (reporte, estruturaCampos) {
        file_starage_parser_1.FileParserStorage.dispose();
        var fileModels;
        var file = reporte.file;
        fileModels = file_parser_1.FileParser.parse(file, reporte);
        // FileParserStorage.set(fileModels = FileParser.parse(file, reporte), reporte = reporte)
        return new Array();
    };
    return FieldsValidation;
}());
exports.FieldsValidation = FieldsValidation;
