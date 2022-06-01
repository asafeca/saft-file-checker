'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SaftFileParserImpl = void 0;
var fs = require('fs');
var os = require('os');
var xmldom_1 = require('xmldom');
var Header_1 = require('../components/header/Header');
var masterfiles_1 = require('../components/masterfiles/masterfiles');
var sourcedocuments_1 = require('../components/source_documents/sourcedocuments');
var iresult_1 = require('../components/commons/iresult');
var SaftFileParserImpl = /** @class */ (function () {
  function SaftFileParserImpl() {
    this.xmlParser = new xmldom_1.DOMParser();
  }
  SaftFileParserImpl.prototype.systemInformation = function () {
    return os.platform();
  };
  SaftFileParserImpl.prototype.parse = function (file) {
    var MAX = 99999;
    var randomFileName = Math.max(Math.random() * MAX);
    fs.writeFileSync(randomFileName.toString(), file);
    // LET'S PARSE THE FILE
    var buffer = fs.readFileSync(randomFileName.toString());
    var stringBuffer = buffer.toString('utf8');
    var xmlDocument = this.xmlParser.parseFromString(stringBuffer, 'application/xml');
    var rootNodes = xmlDocument.childNodes;
    if (!(rootNodes.length - 1 <= 0)) {
      for (var _i = 0, _a = Object.keys(rootNodes); _i < _a.length; _i++) {
        var rootIndex = _a[_i];
        var rootElement = rootNodes[rootIndex];
        if (rootElement.nodeName !== '#text' && rootElement.nodeName !== undefined) {
          if (rootElement.nodeName === 'AuditFile') {
            var auditFileNodes = rootElement.childNodes;
            for (var _b = 0, _c = Object.keys(auditFileNodes); _b < _c.length; _b++) {
              var auditIndex = _c[_b];
              var auditCurrentChild = auditFileNodes[auditIndex];
              // CHECKING HEADER
              if (auditCurrentChild.nodeName === 'Header') {
                var result = Header_1.SaftHeader.isHeaderValid(auditCurrentChild.childNodes);
                if (!result.success) {
                  return result;
                }
              }
              // CHECKING MASTERFILES  // CHECKING
              else if (auditCurrentChild.nodeName === 'MasterFiles') {
                var masterNodes = auditCurrentChild.childNodes;
                var result = masterfiles_1.MasterFiles.isMasterFileValid(masterNodes);
                if (!result.success) {
                  return result;
                }
              } else if (auditCurrentChild.nodeName === 'SourceDocuments') {
                var sourceNodes = auditCurrentChild.childNodes;
                var result = sourcedocuments_1.SourceDocuments.isSourceDocumentsValid({ sourceNodeList: sourceNodes });
                if (!result.success) {
                  return result;
                }
              }
            }
          }
        }
      }
    } else {
      new iresult_1.DataResult({ message: 'Ficheiro inválido. Element ROOT não encontrado!', success: false });
    }
    return new iresult_1.DataResult({ message: 'Ficheiro valido', success: true });
  };
  return SaftFileParserImpl;
})();
exports.SaftFileParserImpl = SaftFileParserImpl;
