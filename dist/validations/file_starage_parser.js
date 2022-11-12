"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileParserStorage = void 0;
class FileParserStorage {
    static set(fileModel, objectReporte) {
        this.fileModel = fileModel;
        this.reporte = objectReporte;
        this.isSet = true;
    }
    static dispose() {
        this.fileModel = new Object();
        this.isSet = false;
        this.reporte = new Object();
    }
}
exports.FileParserStorage = FileParserStorage;
