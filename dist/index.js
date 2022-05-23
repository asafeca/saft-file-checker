"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFile = void 0;
var fs = require("fs");
var SaftFileParserImpl_1 = require("./domain/SaftFileParserImpl");
function parseFile() {
    var content = fs.readFileSync("test.xml");
    var dataView = new Uint8Array(content);
    var parser = new SaftFileParserImpl_1.SaftFileParserImpl();
    var result = parser.parse(dataView);
    console.log("The result is --> ".concat(result));
}
exports.parseFile = parseFile;
parseFile();
//https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d
