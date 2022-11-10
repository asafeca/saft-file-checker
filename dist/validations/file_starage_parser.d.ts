import { Reporte } from "../domain/models/reporte";
export declare class FileParserStorage {
    static fileModel: Object;
    static isSet: Boolean;
    static reporte: Object;
    static set(fileModel: Object, objectReporte: Reporte): void;
    static dispose(): void;
}
