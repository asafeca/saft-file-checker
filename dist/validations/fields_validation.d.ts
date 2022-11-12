import { ErrorDetail } from "../domain/models/detalheErro";
import { Reporte } from "../domain/models/reporte";
import { FieldRules } from "../domain/models/field_rules";
import { FileModelSAFT } from "./model/saft/FileModelSAFT";
export declare class FieldsValidation {
    validate({ reporte, modelRules }: {
        reporte: Reporte;
        modelRules: Array<FieldRules>;
    }): Array<ErrorDetail>;
    mapToFileModel(obj: Object): FileModelSAFT;
    processSaft({ fileModel, modelRules }: {
        fileModel: FileModelSAFT;
        modelRules: Array<FieldRules>;
    }): Array<ErrorDetail>;
}
