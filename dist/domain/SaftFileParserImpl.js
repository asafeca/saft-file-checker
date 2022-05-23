"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaftFileParserImpl = void 0;
var fs = require("fs");
var os = require("os");
var xmldom_1 = require("xmldom");
var Header_1 = require("../components/header/Header");
var masterfiles_1 = require("../components/masterfiles/masterfiles");
var sourcedocuments_1 = require("../components/source_documents/sourcedocuments");
var utils_1 = require("../components/commons/utils");
var SaftFileParserImpl = /** @class */ (function () {
    function SaftFileParserImpl() {
        this.xmlParser = new xmldom_1.DOMParser();
    }
    SaftFileParserImpl.prototype.systemInformation = function () {
        return os.platform();
    };
    SaftFileParserImpl.prototype.parse = function (file) {
        var MAX = 99999;
        var DATA_RESULT = "Ficheiro válido";
        var randomFileName = Math.max(Math.random() * MAX);
        fs.writeFileSync(randomFileName.toString(), file);
        //LET'S PARSE THE FILE
        var buffer = fs.readFileSync(randomFileName.toString());
        var stringBuffer = buffer.toString("utf8");
        var xmlDocument = this.xmlParser.parseFromString(stringBuffer, "application/xml");
        utils_1.Utils.forEach(xmlDocument, function (root) {
            if (!root.nodeName || root.nodeName == "#text")
                return;
            if (root.nodeName === "AuditFile") {
                // GET ALL CHILDREN FORM AUDITFILE
                utils_1.Utils.forEach(root, function (auditFile) {
                    if (!auditFile.nodeName || auditFile.nodeName !== "#text") {
                        // CHECKING AND VALIDATE HEADER
                        if (auditFile.nodeName === "Header") {
                            if (!(new Header_1.SaftHeader(auditFile).isHeaderValid())) {
                                DATA_RESULT = "Ficheiro inválido [HEADER]";
                            }
                        }
                        // CHECKING AND VALIDATE MASTERFILES
                        else if (auditFile.nodeName === "MasterFiles") {
                            if (!(new masterfiles_1.MasterFiles(auditFile).isMasterFileValid())) {
                                DATA_RESULT = "Ficheiro inválido [MasterFIles]";
                            }
                        }
                        else if (auditFile.nodeName === "SourceDocuments") {
                            if (!(new sourcedocuments_1.SourceDocuments(auditFile).isSourceDocumentsValid())) {
                                DATA_RESULT = "Ficheiro Inválido [SourceDocuments]";
                            }
                        }
                    }
                });
            }
        });
        return DATA_RESULT;
    };
    return SaftFileParserImpl;
}());
exports.SaftFileParserImpl = SaftFileParserImpl;
