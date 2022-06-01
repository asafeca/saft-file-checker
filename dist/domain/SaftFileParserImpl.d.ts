/// <reference types="node" />
import { SaftFileParser } from './SaftFileParser';
import { DOMParser } from 'xmldom';
import { IDataResult } from '../components/commons/iresult';
export declare class SaftFileParserImpl implements SaftFileParser {
  xmlParser: DOMParser;
  systemInformation(): NodeJS.Platform;
  parse(file: Uint8Array): IDataResult;
}
