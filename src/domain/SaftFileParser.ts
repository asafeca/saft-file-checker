import { IOException } from '../utils/IOException';
import { ErrorDetail } from './models/detalheErro';

export interface SaftFileParser {
  parse(params: Uint8Array, reportType: Number): Array<ErrorDetail>;
  systemInformation(): NodeJS.Platform;
}
