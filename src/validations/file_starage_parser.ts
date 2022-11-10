import { Reporte } from "../domain/models/reporte"

export class FileParserStorage {


    public static fileModel: Object
    public static isSet: Boolean
    public static reporte: Object

    public static set(fileModel: Object, objectReporte: Reporte) {
        this.fileModel = fileModel
        this.reporte = objectReporte
        this.isSet = true

    }



    public static dispose(): void {

        this.fileModel = new Object()
        this.isSet = false
        this.reporte = new Object()
    }


}