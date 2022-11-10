"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileParserStorage = void 0;
var FileParserStorage = /** @class */ (function () {
    function FileParserStorage() {
    }
    FileParserStorage.set = function (fileModel, objectReporte) {
        this.fileModel = fileModel;
        this.reporte = objectReporte;
        this.isSet = true;
    };
    FileParserStorage.dispose = function () {
        this.fileModel = new Object();
        this.isSet = false;
        this.reporte = new Object();
    };
    return FileParserStorage;
}());
exports.FileParserStorage = FileParserStorage;
