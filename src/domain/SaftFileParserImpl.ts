import { SaftFileParser } from './SaftFileParser';
import * as fs from 'fs';
import * as os from 'os';
import { DOMParser } from 'xmldom';
import { parseString } from 'xml2js';
import { TipoReporte } from '../domain/models/tipo_reporte';
import { FieldRules } from './models/field_rules';
import { Reporte } from './models/reporte';
import { FieldsValidation } from '../validations/fields_validation';
import { ErrorDetail } from './models/detalheErro';

export class SaftFileParserImpl implements SaftFileParser {
  public xmlParser = new DOMParser();

  systemInformation(): NodeJS.Platform {
    return os.platform();
  }
  parse(file: Uint8Array): Array<ErrorDetail> {


    let tipoReporte = new TipoReporte(11, "11");

    let reporte = new Reporte(11, tipoReporte, file)

    let stringData = require("/home/asafeca/repository/projects/saft-file-checker/dist/assets/data.json")

    const jsonStr = JSON.stringify(stringData);
    const structureList: Array<FieldRules> = JSON.parse(jsonStr);

    let filteredList = new Array<FieldRules>();

    structureList.filter(item => item.TIPO_REPORTE_ID == 11)
      .forEach((item => {
        if (item.IS_TIPO_COMPLEXO && item.ESTRUTURA_CAMPO_ID != undefined && item.ESTRUTURA_CAMPO_ID != null && item.ESTRUTURA_CAMPO_ID > 0) {

          const fatherItem = structureList.filter(father => father.ID == item.ESTRUTURA_CAMPO_ID)[0]
          item.estruturaCampoObj = fatherItem;

        }
        filteredList.push(item)

      }))

    new FieldsValidation().validate({ reporte, modelRules: filteredList });


    return new Array()

  }
}
