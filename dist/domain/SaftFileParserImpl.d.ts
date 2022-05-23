/// <reference types="node" />
import { SaftFileParser } from "./SaftFileParser";
import { DOMParser } from "xmldom";
export declare class SaftFileParserImpl implements SaftFileParser {
    xmlParser: DOMParser;
    systemInformation(): NodeJS.Platform;
    parse(file: Uint8Array): string;
}
