'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.parseFile = void 0;
var SaftFileParserImpl_1 = require('./domain/SaftFileParserImpl');
function parseFile(content) {
  //let content = fs.readFileSync("test.xml");
  var dataView = new Uint8Array(content);
  var parser = new SaftFileParserImpl_1.SaftFileParserImpl();
  return parser.parse(dataView);
}
exports.parseFile = parseFile;
module.exports = parseFile;
