import { SaftFileParser } from './SaftFileParser';
import * as fs from 'fs';
import * as os from 'os';
import { DOMParser } from 'xmldom';
import { parseString } from 'xml2js';
import { TipoReporte } from '../domain/models/tipo_reporte';
import { EstruturaCampos } from './models/structure';
import { Reporte } from './models/reporte';
import { FieldsValidation } from '../validations/fields_validation';
import { DetalheErro } from './models/detalheErro';

export class SaftFileParserImpl implements SaftFileParser {
  public xmlParser = new DOMParser();

  systemInformation(): NodeJS.Platform {
    return os.platform();
  }
  parse(file: Uint8Array): Array<DetalheErro> {

    /*

    const MAX = 99999;
    const randomFileName = Math.max(Math.random() * MAX);
    fs.writeFileSync(randomFileName.toString(), file);

    */

    let tipoReporte = new TipoReporte(11, "11");

    let reporte = new Reporte(11, tipoReporte, file)

    let stringData = require("/home/asafeca/repository/projects/saft-file-checker/dist/assets/data.json")

    const jsonStr = JSON.stringify(stringData);
    const structureList: Array<EstruturaCampos> = JSON.parse(jsonStr);

    let filteredList = new Array<EstruturaCampos>();

    structureList.filter(item => item.TIPO_REPORTE_ID == 11)
      .forEach((item => {
        if (item.IS_TIPO_COMPLEXO && item.ESTRUTURA_CAMPO_ID != undefined && item.ESTRUTURA_CAMPO_ID != null && item.ESTRUTURA_CAMPO_ID > 0) {

          const fatherItem = structureList.filter(father => father.ID == item.ESTRUTURA_CAMPO_ID)[0]
          item.estruturaCampoObj = fatherItem;

        }
        filteredList.push(item)

      }))

    FieldsValidation.validate(reporte, filteredList);


    return new Array()

    /*


    // LET'S PARSE THE FILE
    const buffer = fs.readFileSync(randomFileName.toString());
    const stringBuffer = buffer.toString('utf8');
    const xmlDocument = this.xmlParser.parseFromString(stringBuffer, 'application/xml');

    const rootNodes = xmlDocument.childNodes;
    if (!(rootNodes.length - 1 <= 0)) {
      for (const rootIndex of Object.keys(rootNodes)) {
        const rootElement = rootNodes[rootIndex as any];

        if (rootElement.nodeName !== '#text' && rootElement.nodeName !== undefined) {
          if (rootElement.nodeName === 'AuditFile') {
            const auditFileNodes = rootElement.childNodes;

            for (const auditIndex of Object.keys(auditFileNodes)) {
              const auditCurrentChild = auditFileNodes[auditIndex as any];

              // CHECKING HEADER
              if (auditCurrentChild.nodeName === 'Header') {
                const result = SaftHeader.isHeaderValid(auditCurrentChild.childNodes);

                if (!result.success) {
                  return result;
                }
              }

              // CHECKING MASTERFILES  // CHECKING
              else if (auditCurrentChild.nodeName === 'MasterFiles') {
                const masterNodes = auditCurrentChild.childNodes;
                const result = MasterFiles.isMasterFileValid(masterNodes);

                if (!result.success) {
                  return result;
                }
              } else if (auditCurrentChild.nodeName === 'SourceDocuments') {
                const sourceNodes = auditCurrentChild.childNodes;

                const result = SourceDocuments.isSourceDocumentsValid({ sourceNodeList: sourceNodes });
                if (!result.success) {
                  return result;
                }
              }
            }
          }
        }
      }
    } else {
      return new DataResult({ message: 'Ficheiro inválido. Element ROOT não encontrado!', success: false });
    }

    return new DataResult({ message: 'Ficheiro valido', success: true });

    */
  }
}
