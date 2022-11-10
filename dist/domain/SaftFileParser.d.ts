/// <reference types="node" />
import { IDataResult } from '../components/commons/iresult';
export interface SaftFileParser {
    parse(params: Uint8Array, reportType: Number): IDataResult;
    systemInformation(): NodeJS.Platform;
}
