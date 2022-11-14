"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftFileParserImpl = void 0;
const os = require("os");
const xmldom_1 = require("xmldom");
const tipo_reporte_1 = require("../domain/models/tipo_reporte");
const reporte_1 = require("./models/reporte");
const fields_validation_1 = require("../validations/fields_validation");
class SaftFileParserImpl {
    constructor() {
        this.xmlParser = new xmldom_1.DOMParser();
    }
    systemInformation() {
        return os.platform();
    }
    parse(file) {
        let tipoReporte = new tipo_reporte_1.TipoReporte(11, "11");
        let reporte = new reporte_1.Reporte(11, tipoReporte, file);
        const rootDir = require('path').resolve('./');
        let stringData = require(`${rootDir}/dist/assets/data.json`);
        const jsonStr = JSON.stringify(stringData);
        const structureList = JSON.parse(jsonStr);
        let filteredList = new Array();
        structureList.filter(item => item.TIPO_REPORTE_ID == 11)
            .forEach((item => {
            if (item.IS_TIPO_COMPLEXO && item.ESTRUTURA_CAMPO_ID != undefined && item.ESTRUTURA_CAMPO_ID != null && item.ESTRUTURA_CAMPO_ID > 0) {
                const fatherItem = structureList.filter(father => father.ID == item.ESTRUTURA_CAMPO_ID)[0];
                item.estruturaCampoObj = fatherItem;
            }
            filteredList.push(item);
        }));
        new fields_validation_1.FieldsValidation().validate({ reporte, modelRules: filteredList });
        return new Array();
    }
}
exports.SaftFileParserImpl = SaftFileParserImpl;
