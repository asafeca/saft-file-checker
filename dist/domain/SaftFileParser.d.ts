/// <reference types="node" />
export interface SaftFileParser {
    parse(params: Uint8Array): string;
    systemInformation(): NodeJS.Platform;
}
