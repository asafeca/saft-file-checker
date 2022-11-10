"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
var SaftFileParserImpl_1 = require("./domain/SaftFileParserImpl");
var fs = require("fs");
function parseFile(content) {
    var dataView = new Uint8Array(content);
    var parser = new SaftFileParserImpl_1.SaftFileParserImpl();
    return parser.parse(dataView, 11);
}
exports.parseFile = parseFile;
var file = fs.readFileSync("/home/asafeca/repository/projects/saft-file-checker/dist/assets/saft.xml");
var result = new SaftFileParserImpl_1.SaftFileParserImpl().parse(file);
module.exports = parseFile;
