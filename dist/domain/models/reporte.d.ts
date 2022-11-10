import { TipoReporte } from "./tipo_reporte";
export declare class Reporte {
    id: Number;
    tipoReporte: TipoReporte;
    file: Uint8Array;
    constructor(id: Number, tipoReporte: TipoReporte, file: Uint8Array);
}
