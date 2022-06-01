import { SaftFileParser } from './domain/SaftFileParser';
import { SaftFileParserImpl } from './domain/SaftFileParserImpl';
import { IDataResult } from './components/commons/iresult';

export function parseFile(content: Uint8Array): IDataResult {
  const dataView = new Uint8Array(content);
  const parser: SaftFileParser = new SaftFileParserImpl();

  return parser.parse(dataView);
}

module.exports = parseFile;
