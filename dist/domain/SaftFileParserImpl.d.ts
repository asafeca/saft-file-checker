/// <reference types="node" />
import { SaftFileParser } from './SaftFileParser';
import { DOMParser } from 'xmldom';
import { ErrorDetail } from './models/detalheErro';
export declare class SaftFileParserImpl implements SaftFileParser {
    xmlParser: DOMParser;
    systemInformation(): NodeJS.Platform;
    parse(file: Uint8Array): Array<ErrorDetail>;
}
