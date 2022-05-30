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
    console.log("The result is --> ".concat(result.message));
}
exports.parseFile = parseFile;
parseFile();
/*

const specials = new RegExp("^[^<>%$*,;'^']*$|^[^a-zA-Z]*$")
const regex = new RegExp(specials)

const isCorrect =  new RegExp("^[^a-zA-Z]*$").test("52") && new RegExp("^[^<>%$*,;'^'@'{}'%''-''+'#`]*$").test("52")
const right = new Date("2021-10-26T09:51:24")

console.log(right)

*/
//https://medium.com/openmindonline/js-monday-17-publishing-a-typescript-library-59dd8200f80d
