"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftFileParserImpl = void 0;
var os = require("os");
var xmldom_1 = require("xmldom");
var iresult_1 = require("../components/commons/iresult");
var tipo_reporte_1 = require("../domain/models/tipo_reporte");
var reporte_1 = require("./models/reporte");
var fields_validation_1 = require("../validations/fields_validation");
var SaftFileParserImpl = /** @class */ (function () {
    function SaftFileParserImpl() {
        this.xmlParser = new xmldom_1.DOMParser();
    }
    SaftFileParserImpl.prototype.systemInformation = function () {
        return os.platform();
    };
    SaftFileParserImpl.prototype.parse = function (file) {
        /*
    
        const MAX = 99999;
        const randomFileName = Math.max(Math.random() * MAX);
        fs.writeFileSync(randomFileName.toString(), file);
    
        */
        var tipoReporte = new tipo_reporte_1.TipoReporte(11, "11");
        var reporte = new reporte_1.Reporte(11, tipoReporte, file);
        var stringData = require("/home/asafeca/repository/projects/saft-file-checker/dist/assets/data.json");
        var jsonStr = JSON.stringify(stringData);
        var structureList = JSON.parse(jsonStr);
        var filteredList = new Array();
        structureList.filter(function (item) { return item.TIPO_REPORTE_ID == 11; })
            .forEach((function (item) {
            if (item.IS_TIPO_COMPLEXO && item.ESTRUTURA_CAMPO_ID != undefined && item.ESTRUTURA_CAMPO_ID != null && item.ESTRUTURA_CAMPO_ID > 0) {
                var fatherItem = structureList.filter(function (father) { return father.ID == item.ESTRUTURA_CAMPO_ID; })[0];
                item.estruturaCampoObj = fatherItem;
            }
            filteredList.push(item);
        }));
        fields_validation_1.FieldsValidation.validate(reporte, filteredList);
        return new iresult_1.DataResult({ message: "", success: true });
        /*
    
    
        // LET'S PARSE THE FILE
        const buffer = fs.readFileSync(randomFileName.toString());
        const stringBuffer = buffer.toString('utf8');
        const xmlDocument = this.xmlParser.parseFromString(stringBuffer, 'application/xml');
    
        const rootNodes = xmlDocument.childNodes;
        if (!(rootNodes.length - 1 <= 0)) {
          for (const rootIndex of Object.keys(rootNodes)) {
            const rootElement = rootNodes[rootIndex as any];
    
            if (rootElement.nodeName !== '#text' && rootElement.nodeName !== undefined) {
              if (rootElement.nodeName === 'AuditFile') {
                const auditFileNodes = rootElement.childNodes;
    
                for (const auditIndex of Object.keys(auditFileNodes)) {
                  const auditCurrentChild = auditFileNodes[auditIndex as any];
    
                  // CHECKING HEADER
                  if (auditCurrentChild.nodeName === 'Header') {
                    const result = SaftHeader.isHeaderValid(auditCurrentChild.childNodes);
    
                    if (!result.success) {
                      return result;
                    }
                  }
    
                  // CHECKING MASTERFILES  // CHECKING
                  else if (auditCurrentChild.nodeName === 'MasterFiles') {
                    const masterNodes = auditCurrentChild.childNodes;
                    const result = MasterFiles.isMasterFileValid(masterNodes);
    
                    if (!result.success) {
                      return result;
                    }
                  } else if (auditCurrentChild.nodeName === 'SourceDocuments') {
                    const sourceNodes = auditCurrentChild.childNodes;
    
                    const result = SourceDocuments.isSourceDocumentsValid({ sourceNodeList: sourceNodes });
                    if (!result.success) {
                      return result;
                    }
                  }
                }
              }
            }
          }
        } else {
          return new DataResult({ message: 'Ficheiro inválido. Element ROOT não encontrado!', success: false });
        }
    
        return new DataResult({ message: 'Ficheiro valido', success: true });
    
        */
    };
    return SaftFileParserImpl;
}());
exports.SaftFileParserImpl = SaftFileParserImpl;
