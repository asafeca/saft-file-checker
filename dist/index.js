"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
const SaftFileParserImpl_1 = require("./domain/SaftFileParserImpl");
const fs = require("fs");
function parseFile(content) {
    const dataView = new Uint8Array(content);
    const parser = new SaftFileParserImpl_1.SaftFileParserImpl();
    return parser.parse(dataView, 11);
}
exports.parseFile = parseFile;
const file = fs.readFileSync("/home/asafeca/repository/projects/saft-file-checker/dist/assets/saft.xml");
const result = new SaftFileParserImpl_1.SaftFileParserImpl().parse(file);
module.exports = parseFile;
