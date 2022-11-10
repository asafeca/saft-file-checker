import { DetalheErro } from "../domain/models/detalheErro";
import { Reporte } from "../domain/models/reporte";
import { EstruturaCampos } from "../domain/models/structure";
export declare class FieldsValidation {
    static validate(reporte: Reporte, estruturaCampos: Array<EstruturaCampos>): Array<DetalheErro>;
}
