import { TipoReporte } from "./tipo_reporte";

export class Reporte {
    public id!: Number;
    public tipoReporte!: TipoReporte;
    public file!: Uint8Array

    constructor(id: Number, tipoReporte: TipoReporte, file: Uint8Array) {
        this.id = id;
        this.file = file;
        this.tipoReporte = tipoReporte;

    }
}