import { SaftFileParser } from './domain/SaftFileParser';
import { SaftFileParserImpl } from './domain/SaftFileParserImpl';
import * as fs from 'fs'
import { ErrorDetail } from './domain/models/detalheErro';



export function parseFile(content: Uint8Array): Array<ErrorDetail> {
  const dataView = new Uint8Array(content);
  const parser: SaftFileParser = new SaftFileParserImpl();


  return parser.parse(dataView, 11);
}


const file = fs.readFileSync("/home/asafeca/repository/projects/saft-file-checker/dist/assets/saft.xml");


const result = new SaftFileParserImpl().parse(file)


module.exports = parseFile;
