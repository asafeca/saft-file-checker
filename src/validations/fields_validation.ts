import { ErrorDetail } from "../domain/models/detalheErro";
import { Reporte } from "../domain/models/reporte";
import { FieldRules } from "../domain/models/field_rules";
import { FileParser } from "./file_parser";
import { FileParserStorage } from "./file_starage_parser";
import { FileModelSAFT } from "./model/saft/FileModelSAFT";

export class FieldsValidation {

    validate({ reporte, modelRules }: { reporte: Reporte, modelRules: Array<FieldRules> }): Array<ErrorDetail> {

        FileParserStorage.dispose();


        const file = reporte.file;

        FileParserStorage.set(FileParser.parse(file, reporte), reporte = reporte)


        return this.processSaft({ fileModel: this.mapToFileModel(FileParserStorage.fileModel), modelRules: modelRules })


    }


    mapToFileModel(obj: Object): FileModelSAFT {


        let fromEntries = Object.fromEntries(obj as Map<string, Object>)
        let strData = JSON.stringify(fromEntries)

        console.log(strData)


        // const model: FileModelSAFT = JSON.parse(fromEntries)
        // console.log(model.header)


        return new FileModelSAFT

    }


    processSaft({ fileModel, modelRules }: { fileModel: FileModelSAFT, modelRules: Array<FieldRules> }): Array<ErrorDetail> {

        return new Array()
    }


}