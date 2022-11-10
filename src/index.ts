import { SaftFileParser } from './domain/SaftFileParser';
import { SaftFileParserImpl } from './domain/SaftFileParserImpl';
import { IDataResult } from './components/commons/iresult';
import * as fs from 'fs'



export function parseFile(content: Uint8Array): IDataResult {
  const dataView = new Uint8Array(content);
  const parser: SaftFileParser = new SaftFileParserImpl();


  return parser.parse(dataView, 11);
}


const file = fs.readFileSync("/home/asafeca/repository/projects/saft-file-checker/dist/assets/saft.xml");


const result = new SaftFileParserImpl().parse(file)


module.exports = parseFile;
