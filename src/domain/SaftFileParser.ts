import { IOException } from '../utils/IOException';
import { DetalheErro } from './models/detalheErro';

export interface SaftFileParser {
  parse(params: Uint8Array, reportType: Number): Array<DetalheErro>;
  systemInformation(): NodeJS.Platform;
}
