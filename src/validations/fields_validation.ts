import { DetalheErro } from "../domain/models/detalheErro";
import { Reporte } from "../domain/models/reporte";
import { EstruturaCampos } from "../domain/models/structure";
import { FileParser } from "./file_parser";
import { FileParserStorage } from "./file_starage_parser";

export class FieldsValidation {

    static validate(reporte: Reporte, estruturaCampos: Array<EstruturaCampos>): Array<DetalheErro> {

        FileParserStorage.dispose();

        let fileModels!: Object

        const file = reporte.file;
        fileModels = FileParser.parse(file, reporte)

        // FileParserStorage.set(fileModels = FileParser.parse(file, reporte), reporte = reporte)

        return new Array<DetalheErro>()
    }
}