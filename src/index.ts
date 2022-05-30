import { SaftFileParser } from "./domain/SaftFileParser";
import { SaftFileParserImpl } from "./domain/SaftFileParserImpl";
import {IDataResult } from "./components/commons/iresult";

 function parseFile(content: Uint8Array):IDataResult {

  //let content = fs.readFileSync("test.xml");
  const dataView = new Uint8Array(content);
  let parser: SaftFileParser = new SaftFileParserImpl();

  return  parser.parse(dataView)


}

module.exports = parseFile
